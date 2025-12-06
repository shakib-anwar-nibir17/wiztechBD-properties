import type React from "react";
import { Button } from "../../../../components/ui/button";

interface SocialLoginButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <Button
      variant="outline"
      className="w-full h-14 !rounded-[8px] !border-neutral-200 transition-shadow justify-center gap-4 text-base font-medium bg-transparent hover:!bg-neutral-50"
      onClick={onClick}
    >
      {icon}
      <span className="text-[#42526d]">{label}</span>
    </Button>
  );
};
