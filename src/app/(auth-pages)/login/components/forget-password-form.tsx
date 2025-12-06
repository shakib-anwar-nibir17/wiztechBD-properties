import { ArrowLeft } from "lucide-react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import { Button, FloatingLabelInput } from "../../../../components";
import { ForgotPasswordFormData } from "../../../../features/auth/validation";

interface ForgetPasswordFormProps {
  handleBackToLogin: () => void;
  handleForgotSubmit: UseFormHandleSubmit<ForgotPasswordFormData>;
  onForgotPasswordSubmit: (data: ForgotPasswordFormData) => void;
  forgotControl: Control<ForgotPasswordFormData>;
  forgotErrors: FieldErrors<ForgotPasswordFormData>;
  inputType: string;
  handleInputChange: (value: string, onChange: (value: string) => void) => void;
}

export const ForgetPasswordForm = ({
  handleBackToLogin,
  handleForgotSubmit,
  onForgotPasswordSubmit,
  inputType,
  handleInputChange,
  forgotControl,
  forgotErrors,
}: ForgetPasswordFormProps) => {
  return (
    <>
      {/* Back button */}
      <button
        onClick={handleBackToLogin}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Login</span>
      </button>

      <form
        onSubmit={handleForgotSubmit(onForgotPasswordSubmit)}
        className="space-y-4"
      >
        {/* Email/Phone Input only */}
        <Controller
          name="emailOrPhone"
          control={forgotControl}
          render={({ field }) => (
            <FloatingLabelInput
              label={inputType === "phone" ? "Phone" : "Email"}
              type={inputType === "phone" ? "tel" : "email"}
              value={field.value}
              onChange={(e) =>
                handleInputChange(e.target.value, field.onChange)
              }
              onBlur={field.onBlur}
              error={forgotErrors.emailOrPhone?.message}
            />
          )}
        />

        {/* Reset Password Button */}
        <Button
          type="submit"
          className="w-full h-14 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-lg font-medium"
        >
          Send Reset Link
        </Button>
      </form>
    </>
  );
};
