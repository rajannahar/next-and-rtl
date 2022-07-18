import React from "react";
import clsx from "clsx";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "primary" | "secondary" | "error" | "disabled";
  children: string | React.ReactNode;
  disabled: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  variant = "error",
  children,
  disabled = false,
  ...props
}) => (
  <button
    className={clsx(
      "font-sans font-medium px-4 py-2 text-sm min-w-[72px] rounded-full border-2 outline-none transition-colors focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-300 dark:ring-offset-purple-700 disabled:text-slate-300 dark:disabled:text-slate-400 disabled:bg-slate-100 disabled:border-slate-100 dark:disabled:bg-slate-600 dark:disabled:border-slate-600",
      // Primary
      variant === "primary" &&
        "bg-green-500 hover:bg-green-700 text-white border-green-500 hover:border-green-700",
      // Secondary
      variant === "secondary" &&
        "bg-purple-500 text-white dark:text-white border-purple-700 dark:border-white hover:text-white dark:hover:text-white hover:bg-purple-700 dark:hover:bg-purple-700",
      // Error
      variant === "error" &&
        "bg-red-500 text-white dark:text-white border-red-500 dark:border-red-500 hover:text-white dark:hover:text-white hover:bg-red-700 hover:border-red-700 dark:hover:bg-red-700"
      // Additional classes
      // className
    )}
    {...props}
    disabled={disabled}
    onClick={() => console.log("clicked")}
  >
    {children}
  </button>
);
