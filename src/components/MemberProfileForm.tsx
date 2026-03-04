import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { supabase } from "@/integrations/supabase/client";
import { TablesInsert } from "@/integrations/supabase/types";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  full_name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(8, "Enter a valid phone number.").max(20).optional().or(z.literal("")),
  profession: z.string().optional(),
  annual_income_bracket: z.string().min(1, "Select an income bracket."),
  education_level: z.string().optional(),
  primary_city: z.string().optional(),
  cars_owned_count: z
    .string()
    .optional()
    .refine((val) => !val || !Number.isNaN(Number(val)), {
      message: "Enter a valid number of cars.",
    }),
  primary_car_make_model: z.string().optional(),
  primary_car_year: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{4}$/.test(val), {
      message: "Use a 4‑digit year (e.g. 2022).",
    }),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const incomeOptions = [
  "Below ₹25L",
  "₹25L – ₹50L",
  "₹50L – ₹1Cr",
  "₹1Cr – ₹3Cr",
  "₹3Cr+",
];

const educationOptions = ["Undergraduate", "Postgraduate", "Doctorate", "Other"];

export const MemberProfileForm = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      profession: "",
      annual_income_bracket: "",
      education_level: "",
      primary_city: "",
      cars_owned_count: "",
      primary_car_make_model: "",
      primary_car_year: "",
      notes: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const payload: TablesInsert<"member_profiles"> = {
        full_name: values.full_name,
        email: values.email,
        phone: values.phone || null,
        profession: values.profession || null,
        annual_income_bracket: values.annual_income_bracket,
        education_level: values.education_level || null,
        primary_city: values.primary_city || null,
        cars_owned_count: values.cars_owned_count ? Number(values.cars_owned_count) : null,
        cars: values.primary_car_make_model
          ? [
              {
                label: values.primary_car_make_model,
                year: values.primary_car_year || null,
              },
            ]
          : null,
        notes: values.notes || null,
      };

      const { error } = await supabase.from("member_profiles").insert(payload);

      if (error) {
        console.error(error);
        toast({
          title: "Something went wrong",
          description: "We couldn’t save your profile. Please try again in a moment.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Profile submitted",
        description: "Thank you. Our team will review your details and get back to you.",
      });
      form.reset();
    } catch (err) {
      console.error(err);
      toast({
        title: "Unexpected error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">Tell us about yourself</h2>
        <p className="text-sm md:text-base text-muted-foreground">
          This helps SwapLuxe curate the right matches inside our invite‑only club. Your information stays private with
          our team.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full legal name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone (WhatsApp preferred)</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="primary_city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary city</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Mumbai, Delhi NCR, Bangalore" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="profession"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profession</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Founder, CXO, Investor" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="annual_income_bracket"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Annual income (approx)</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bracket" />
                      </SelectTrigger>
                      <SelectContent>
                        {incomeOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="education_level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Highest education</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        {educationOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="cars_owned_count"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of cars you own</FormLabel>
                  <FormControl>
                    <Input type="number" min={0} placeholder="e.g. 3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="primary_car_make_model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Flagship car (make & model)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Porsche 911 Turbo S" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="primary_car_year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model year</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 2023" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anything else we should know?</FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    placeholder="Share other cars, collections (watches, yachts, jets), or preferences for swaps."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground max-w-md">
              By submitting, you agree to be contacted by the SwapLuxe team. We never share your details outside the
              club without consent.
            </p>
            <Button type="submit" size="lg" disabled={submitting} className="min-w-[160px]">
              {submitting ? "Submitting..." : "Submit profile"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

