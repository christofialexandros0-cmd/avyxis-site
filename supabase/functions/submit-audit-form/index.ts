import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Allowed origins for CORS - restrict to production domain and trusted previews
const allowedOrigins = [
  'https://avyxis.com',
  'https://www.avyxis.com',
  'https://avyxis.net', // Legacy domain
  'http://localhost:5173', // Local development
  'http://localhost:8080', // Alternative local dev port
];

function isAllowedOrigin(origin: string): boolean {
  // Exact matches
  if (allowedOrigins.includes(origin)) return true;

  // Trusted preview domains
  if (/^https:\/\/.*\.lovable\.app$/.test(origin)) return true;
  if (/^https:\/\/.*\.lovableproject\.com$/.test(origin)) return true;
  if (/^https:\/\/.*\.github\.io$/.test(origin)) return true;

  return false;
}

function getCorsHeaders(req: Request) {
  const origin = req.headers.get('origin') || '';
  const allowedOrigin = origin && isAllowedOrigin(origin) ? origin : allowedOrigins[0];

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Max-Age': '86400',
  };
}

// Simple in-memory rate limiting (per IP, 5 requests per minute)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return false;
  }
  
  if (entry.count >= RATE_LIMIT) {
    return true;
  }
  
  entry.count++;
  return false;
}

// Server-side validation (mirrors client-side Zod schema)
function validateFormData(data: unknown): { valid: boolean; errors: string[]; sanitized?: Record<string, string> } {
  const errors: string[] = [];
  
  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Invalid request body'] };
  }
  
  const formData = data as Record<string, unknown>;
  
  // full_name validation
  const fullName = typeof formData.full_name === 'string' ? formData.full_name.trim() : '';
  if (!fullName) {
    errors.push('Full name is required');
  } else if (fullName.length > 100) {
    errors.push('Name must be less than 100 characters');
  }
  
  // clinic_name validation
  const clinicName = typeof formData.clinic_name === 'string' ? formData.clinic_name.trim() : '';
  if (!clinicName) {
    errors.push('Clinic name is required');
  } else if (clinicName.length > 100) {
    errors.push('Clinic name must be less than 100 characters');
  }
  
  // email validation
  const email = typeof formData.email === 'string' ? formData.email.trim() : '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.push('Email is required');
  } else if (!emailRegex.test(email)) {
    errors.push('Please enter a valid email');
  } else if (email.length > 255) {
    errors.push('Email must be less than 255 characters');
  }
  
  // website validation (optional)
  const website = typeof formData.website === 'string' ? formData.website.trim() : '';
  if (website) {
    try {
      new URL(website);
    } catch {
      errors.push('Please enter a valid URL');
    }
  }
  
  // message validation (optional)
  const message = typeof formData.message === 'string' ? formData.message.trim() : '';
  if (message.length > 1000) {
    errors.push('Message must be less than 1000 characters');
  }
  
  if (errors.length > 0) {
    return { valid: false, errors };
  }
  
  return {
    valid: true,
    errors: [],
    sanitized: {
      full_name: fullName,
      clinic_name: clinicName,
      email: email,
      website: website,
      message: message,
    }
  };
}

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('cf-connecting-ip') || 
                     'unknown';
    
    // Check rate limit (IP used internally only, not logged)
    if (isRateLimited(clientIP)) {
      console.log('Rate limit exceeded for request');
      return new Response(JSON.stringify({ error: 'Too many requests. Please try again later.' }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Parse request body
    const body = await req.json();

    // Validate and sanitize
    const validation = validateFormData(body);
    if (!validation.valid) {
      console.log('Form validation failed');
      return new Response(JSON.stringify({ error: validation.errors.join(', ') }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get the webhook URL from secrets
    const webhookUrl = Deno.env.get('MAKE_WEBHOOK_URL');
    if (!webhookUrl) {
      console.error('MAKE_WEBHOOK_URL not configured');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Forward to Make.com webhook
    // Forward to webhook (details not logged for security)
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validation.sanitized),
    });

    if (!webhookResponse.ok) {
      console.error('Webhook request failed:', webhookResponse.status);
      return new Response(JSON.stringify({ error: 'Failed to submit form' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Form submitted successfully');
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return new Response(JSON.stringify({ error: 'An unexpected error occurred' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
