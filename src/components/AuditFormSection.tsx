import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";

const formSchema = z.object({
  full_name: z.string().trim().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  clinic_name: z.string().trim().min(1, "Clinic name is required").max(100, "Clinic name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;

const AuditFormSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
      const response = await fetch(
        "https://hook.eu2.make.com/a9bhrnqz1iaq96gpmhtkspf3q035g2nx",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: data.full_name,
            clinic_name: data.clinic_name,
            email: data.email,
            website: data.website || "",
            message: data.message || "",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit-form" className="py-20 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Free Automation Audit
            </h2>
            <p className="text-muted-foreground text-lg">
              Tell us about your med spa, and we'll identify your biggest automation opportunities.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Received!
                </h3>
                <p className="text-muted-foreground">
                  We'll reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input
                      id="full_name"
                      placeholder="Dr. Jane Smith"
                      {...register("full_name")}
                      className={errors.full_name ? "border-destructive" : ""}
                    />
                    {errors.full_name && (
                      <p className="text-sm text-destructive">{errors.full_name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="clinic_name">Clinic Name *</Label>
                    <Input
                      id="clinic_name"
                      placeholder="Radiant Med Spa"
                      {...register("clinic_name")}
                      className={errors.clinic_name ? "border-destructive" : ""}
                    />
                    {errors.clinic_name && (
                      <p className="text-sm text-destructive">{errors.clinic_name.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@radiantmedspa.com"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website (optional)</Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://radiantmedspa.com"
                      {...register("website")}
                      className={errors.website ? "border-destructive" : ""}
                    />
                    {errors.website && (
                      <p className="text-sm text-destructive">{errors.website.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your current lead follow-up process..."
                    rows={4}
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {submitError && (
                  <p className="text-sm text-destructive text-center">{submitError}</p>
                )}

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Your Free Audit
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditFormSection;
