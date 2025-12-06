"use client";

import {
  AppleIcon,
  GoogleIcon,
  PhoneIcon,
  SocialLoginButton,
} from "@/components";
import { isPhoneNumber } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../../../components/common/logo";
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
  LoginFormData,
  loginSchema,
} from "../../../features/auth/validation";
import { ForgetPasswordForm } from "./components/forget-password-form";
import { LoginForm } from "./components/login-form";

export default function LoginPage() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [inputType, setInputType] = useState<"email" | "phone">("email");
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrPhone: "",
      password: "",
      rememberMe: false,
    },
  });

  const {
    control: forgotControl,
    handleSubmit: handleForgotSubmit,
    formState: { errors: forgotErrors },
    reset: resetForgot,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      emailOrPhone: "",
    },
  });

  const handleInputChange = (
    value: string,
    onChange: (value: string) => void
  ) => {
    onChange(value);
    if (isPhoneNumber(value)) {
      setInputType("phone");
    } else {
      setInputType("email");
    }
  };

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
  };

  const onForgotPasswordSubmit = (data: ForgotPasswordFormData) => {
    console.log("Forgot password request for:", data.emailOrPhone);
    // Handle forgot password logic here (e.g., send reset email/SMS)
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
    resetForgot();
  };

  const getHeadingText = () => {
    if (isForgotPassword) {
      return "Forgot Password";
    }
    if (showEmailForm) {
      return "Welcome Back";
    }
    return "Create New Account";
  };

  return (
    <div className="h-full flex flex-col items-center justify-center bg-background px-4 py-8">
      {/* Logo */}
      <Logo />

      <h1 className="text-3xl md:text-[32px] font-semibold text-foreground mt-6 mb-2 text-center">
        {getHeadingText()}
      </h1>
      <p className="text-muted-foreground mb-8 text-center">
        {isForgotPassword
          ? "Enter your email or phone to reset password"
          : "Let's login to grab amazing deal"}
      </p>

      <div className="w-full max-w-sm space-y-4">
        {isForgotPassword ? (
          <ForgetPasswordForm
            handleBackToLogin={handleBackToLogin}
            handleForgotSubmit={handleForgotSubmit}
            onForgotPasswordSubmit={onForgotPasswordSubmit}
            inputType={inputType}
            handleInputChange={handleInputChange}
            forgotControl={forgotControl}
            forgotErrors={forgotErrors}
          />
        ) : (
          <>
            {/* Social Login Buttons */}
            <SocialLoginButton
              icon={<GoogleIcon />}
              label="Continue with Google"
              onClick={() => console.log("Google login")}
            />

            <SocialLoginButton
              icon={<AppleIcon />}
              label="Continue with Apple"
              onClick={() => console.log("Apple login")}
            />

            {!showEmailForm && (
              <SocialLoginButton
                icon={<PhoneIcon />}
                label="Continue with Email/Phone"
                onClick={() => setShowEmailForm(true)}
              />
            )}

            {showEmailForm && (
              <LoginForm
                handleSubmit={handleSubmit}
                control={control}
                errors={errors}
                inputType={inputType}
                handleInputChange={handleInputChange}
                onSubmit={onSubmit}
                handleForgotPasswordClick={() => {
                  setIsForgotPassword(true);
                  reset();
                }}
              />
            )}
          </>
        )}
      </div>

      {/* Sign Up Link */}
      <p className="mt-8 text-muted-foreground">
        {"Don't have an account? "}
        <Link
          href="/signup"
          className="text-primary-500 font-medium hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
