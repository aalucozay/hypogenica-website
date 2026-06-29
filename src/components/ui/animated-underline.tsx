import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedUnderlineProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Wraps inline text with an underline that wipes in from the left on hover and
 * retracts to the right on leave. The line uses `currentColor`, so it always
 * matches the text colour.
 */
export function AnimatedUnderline({
  children = "Hover me",
  className,
}: AnimatedUnderlineProps) {
  return (
    <span
      className={cn(
        "relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100",
        className,
      )}
    >
      {children}
    </span>
  );
}
