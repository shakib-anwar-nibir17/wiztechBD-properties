import z from "zod";

export const loginSchema = z.object({
  emailOrPhone: z
    .string()
    .min(1, "Email or phone is required")
    .refine((value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) return true;
      const bdPhoneRegex = /^(\+?880|0)1[3-9]\d{8}$/;
      return bdPhoneRegex.test(value.replaceAll(/\s/g, ""));
    }, "Enter a valid email or Bangladeshi phone number"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

export const forgotPasswordSchema = z.object({
  emailOrPhone: z
    .string()
    .min(1, "Email or phone is required")
    .refine((value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) return true;
      const bdPhoneRegex = /^(\+?880|0)1[3-9]\d{8}$/;
      return bdPhoneRegex.test(value.replaceAll(/\s/g, ""));
    }, "Enter a valid email or Bangladeshi phone number"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
