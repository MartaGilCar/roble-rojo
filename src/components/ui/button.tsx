import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ children, href, variant = "primary", className }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variantClasses = {
    primary: "bg-[#2B2927] text-[#FAF7F2] hover:bg-[#1f1d1a]",
    secondary: "border border-[#E8E0D4] bg-transparent text-[#2B2927] hover:bg-[#F5F1EA]",
  };

  const classes = twMerge(clsx(baseClasses, variantClasses[variant], className));

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
