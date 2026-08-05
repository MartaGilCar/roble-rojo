import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={twMerge("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}
