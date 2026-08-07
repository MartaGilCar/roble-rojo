import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type BaseButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  type?: never;
};

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

export function Button(props: AnchorButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className, ...rest } = props;

  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variantClasses = {
    primary: "bg-[#2B2927] text-[#FAF7F2] hover:bg-[#1f1d1a]",
    secondary: "border border-[#E8E0D4] bg-transparent text-[#2B2927] hover:bg-[#F5F1EA]",
  };

  const classes = twMerge(clsx(baseClasses, variantClasses[variant], className));

  if ("href" in props && props.href) {
    const { href, type, ...anchorProps } = rest as AnchorButtonProps;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest as NativeButtonProps;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
