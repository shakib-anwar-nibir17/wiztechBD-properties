import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import { Button, Checkbox, FloatingLabelInput } from "../../../../components";
import { LoginFormData } from "../../../../features/auth/validation";

interface LoginFormProps {
  handleSubmit: UseFormHandleSubmit<LoginFormData>;
  control: Control<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
  inputType: string;
  handleInputChange: (value: string, onChange: (value: string) => void) => void;
  onSubmit: (data: LoginFormData) => void;
  handleForgotPasswordClick: () => void;
}

export const LoginForm = ({
  handleSubmit,
  control,
  errors,
  inputType,
  handleInputChange,
  onSubmit,
  handleForgotPasswordClick,
}: LoginFormProps) => {
  return (
    <>
      {/* Divider */}
      <div className="flex items-center gap-4 py-2">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-muted-foreground text-sm">Or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email/Phone Input with Controller */}
        <Controller
          name="emailOrPhone"
          control={control}
          render={({ field }) => (
            <FloatingLabelInput
              label={inputType === "phone" ? "Phone" : "Email"}
              type={inputType === "phone" ? "tel" : "email"}
              value={field.value}
              onChange={(e) =>
                handleInputChange(e.target.value, field.onChange)
              }
              onBlur={field.onBlur}
              error={errors.emailOrPhone?.message}
            />
          )}
        />

        {/* Password Input with Controller */}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <FloatingLabelInput
              label="Password"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.password?.message}
              showPasswordToggle
            />
          )}
        />

        {/* Remember me and Forgot Password */}
        <div className="flex items-center justify-between">
          <Controller
            name="rememberMe"
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-2">
                <Checkbox
                  id="rememberMe"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-gray-300"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm text-foreground cursor-pointer"
                >
                  Remember me
                </label>
              </div>
            )}
          />
          <Button
            variant="link"
            type="button"
            onClick={handleForgotPasswordClick}
            className="text-sm text-foreground underline hover:text-muted-foreground"
          >
            Forgot Password?
          </Button>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          className="w-full h-14 rounded-xl bg-[#5c1a3b] hover:bg-[#4a1530] text-white text-lg font-medium"
        >
          Login
        </Button>
      </form>
    </>
  );
};
