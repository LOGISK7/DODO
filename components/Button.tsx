import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "gold" | "ghost";
  size?: "default" | "small";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "default", className = "", children, ...props }, ref) => {
    // Base styles
    // - font-weight 600
    // - rounded-[10px] (which is our --r-sm)
    // - transition for hover
    // - focus ring
    // - full-width on mobile (w-full md:w-auto)
    const baseClass =
      "inline-flex items-center justify-center font-semibold rounded-[var(--r-sm)] w-full md:w-auto " +
      "transition-all duration-[140ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] " +
      "focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--gold-cta)] focus-visible:outline-offset-1 " +
      "hover:-translate-y-[1px]";

    // Size styles
    const sizeClass =
      size === "default" ? "min-h-[56px] px-6" : "min-h-[44px] px-4";

    // Variant styles
    let variantClass = "";
    if (variant === "primary") {
      variantClass = "bg-[var(--ink)] text-[var(--surface)] hover:bg-[var(--ink-2)]";
    } else if (variant === "gold") {
      // 17px+ semibold ONLY
      variantClass = "bg-[var(--gold-cta)] text-[var(--surface)] text-[17px] hover:brightness-110";
    } else if (variant === "ghost") {
      variantClass = "bg-transparent border border-[var(--line)] text-[var(--ink)] hover:bg-[var(--surface-raised)]";
    }

    return (
      <button
        ref={ref}
        className={`${baseClass} ${sizeClass} ${variantClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
