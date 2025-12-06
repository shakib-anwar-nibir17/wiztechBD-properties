"use state";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const FloatingLabelInput = ({
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  showPasswordToggle,
}: Readonly<{
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  error?: string;
  showPasswordToggle?: boolean;
}>) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = value && value.length > 0;
  const isFloating = isFocused || hasValue;

  // Determine input type based on password toggle state
  let inputType = type;
  if (showPasswordToggle) {
    inputType = showPassword ? "text" : "password";
  }

  return (
    <div className="relative">
      <div
        className={`relative rounded-[8px] border ${
          error ? "border-red-400" : "border-gray-200"
        } bg-background transition-all`}
      >
        <label
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            isFloating
              ? "top-2 text-xs text-muted-foreground"
              : "top-1/2 -translate-y-1/2 text-base text-muted-foreground"
          }`}
        >
          {label}
        </label>
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            onBlur();
          }}
          className="w-full h-[54px] px-4 pt-6 pb-2 bg-transparent outline-none text-foreground rounded-[8px]"
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5 text-neutral-400" />
            ) : (
              <Eye className="w-5 h-5 text-neutral-400" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}
    </div>
  );
};
