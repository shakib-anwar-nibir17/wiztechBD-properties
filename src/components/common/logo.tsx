import { PUBLIC_ROUTES } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href={PUBLIC_ROUTES.HOME}>
      <Image
        src="/logo.png"
        alt="Logo"
        width={170}
        height={30}
        className={cn(className)}
        unoptimized
      />
    </Link>
  );
};

export default Logo;
