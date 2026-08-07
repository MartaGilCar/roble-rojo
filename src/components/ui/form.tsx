import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { InputHTMLAttributes, LabelHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  className?: string;
};

export function FormItem({ className, children }: React.PropsWithChildren<BaseProps>) {
  return <div className={twMerge("grid gap-3", className)}>{children}</div>;
}

export function FormLabel({ className, children, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={twMerge("text-sm font-medium text-[#3A322B]", className)} {...props}>
      {children}
    </label>
  );
}

export function FormDescription({ className, children }: React.PropsWithChildren<BaseProps>) {
  return <p className={twMerge("text-sm leading-6 text-[#6F6254]", className)}>{children}</p>;
}

export function FormMessage({ className, children }: React.PropsWithChildren<BaseProps>) {
  return <p className={twMerge("text-sm text-red-600", className)}>{children}</p>;
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={twMerge(
        "h-14 rounded-[1.25rem] border border-[#D9D2C6] bg-[#FBF8F3] px-5 text-base text-[#2B2927] outline-none transition focus:border-[#2B2927] focus:ring-2 focus:ring-[#D9D2C6] disabled:cursor-not-allowed disabled:opacity-70",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={twMerge(
        "min-h-[14rem] resize-none rounded-[1.25rem] border border-[#D9D2C6] bg-[#FBF8F3] px-5 py-4 text-base leading-7 text-[#2B2927] outline-none transition focus:border-[#2B2927] focus:ring-2 focus:ring-[#D9D2C6] disabled:cursor-not-allowed disabled:opacity-70",
        className
      )}
      {...props}
    />
  );
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={twMerge(
        "h-14 rounded-[1.25rem] border border-[#D9D2C6] bg-[#FBF8F3] px-5 text-base text-[#2B2927] outline-none transition focus:border-[#2B2927] focus:ring-2 focus:ring-[#D9D2C6] disabled:cursor-not-allowed disabled:opacity-70",
        className
      )}
      {...props}
    />
  );
}

export function Checkbox({ className, children, ...props }: React.PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>) {
  return (
    <label className={twMerge("inline-flex items-center gap-3", className)}>
      <input
        type="checkbox"
        className="h-5 w-5 rounded-lg border border-[#D9D2C6] bg-[#FBF8F3] text-[#2B2927] accent-[#2B2927] outline-none transition focus:ring-2 focus:ring-[#D9D2C6]"
        {...props}
      />
      <span className="text-sm leading-6 text-[#3A322B]">{children}</span>
    </label>
  );
}
