import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, ArrowRight, FileText, Lightbulb, Map } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  full_name: z.string().trim().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  clinic_name: z.string().trim().min(1, "Clinic name is required").max(100, "Clinic name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;

const benefits = [
  {
    icon: FileText,
    text: "A 1-page audit of your response flow",
  },
  {
    icon: Lightbulb,
    text: "Quick wins to improve lead handling",
  },
  {
    icon: Map,
    text: "A recommended automation blueprint",
  },
];

const AuditFormSection = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { data: responseData, error } = await supabase.functions.invoke('submit-audit-form', {
        body: {
          full_name: data.full_name,
          clinic_name: data.clinic_name,
          email: data.email,
          website: data.website || "",
          message: data.message || "",
        },
      });

      if (error) {
        throw new Error(error.message || "Failed to submit form");
      }

      if (responseData?.error) {
        throw new Error(responseData.error);
      }

      navigate('/thanks');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit-form" className="section-padding scroll-mt-20">
      <div className="container-narrow">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-h2-mobile md:text-h2 text-foreground mb-3">
              Request Your Free Speed-to-Lead Audit
            </h2>
            <p className="text-muted-foreground mb-6">
              Tell us about your med spa, and we'll identify your biggest opportunities.
            </p>

            {/* Benefits */}
            <div className="flex flex-col items-start sm:items-center sm:flex-row sm:justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <benefit.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 shadow-card border border-border/50">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="full_name" className="text-sm font-medium">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="full_name"
                    placeholder="Dr. Jane Smith"
                    {...register("full_name")}
                    className={`h-11 ${errors.full_name ? "border-destructive" : ""}`}
                  />
                  {errors.full_name && (
                    <p className="text-xs text-destructive">{errors.full_name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clinic_name" className="text-sm font-medium">
                    Clinic Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="clinic_name"
                    placeholder="Radiant Med Spa"
                    {...register("clinic_name")}
                    className={`h-11 ${errors.clinic_name ? "border-destructive" : ""}`}
                  />
                  {errors.clinic_name && (
                    <p className="text-xs text-destructive">{errors.clinic_name.message}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@radiantmedspa.com"
                    {...register("email")}
                    className={`h-11 ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website" className="text-sm font-medium">
                    Website <span className="text-muted-foreground font-normal">(optional)</span>
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://radiantmedspa.com"
                    {...register("website")}
                    className={`h-11 ${errors.website ? "border-destructive" : ""}`}
                  />
                  {errors.website && (
                    <p className="text-xs text-destructive">{errors.website.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your current lead follow-up process..."
                  rows={3}
                  {...register("message")}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              {/* Medical info notice */}
              <p className="text-xs text-muted-foreground text-center">
                Please do not submit personal medical information.
              </p>

              {submitError && (
                <p className="text-sm text-destructive text-center">{submitError}</p>
              )}

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get a Free Speed-to-Lead Audit
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to be contacted about your request. Read our{" "}
                <Link to="/privacy" className="underline hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms" className="underline hover:text-foreground transition-colors">
                  Terms
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditFormSection;
