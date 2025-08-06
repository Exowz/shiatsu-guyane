// Enhanced Input component with natural color palette and improved motion effects

"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 120; // Slightly increased radius for smoother effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          rgb(var(--color-primary) / 0.15),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-xl p-[2px] transition duration-300"
      >
        <input
          type={type}
          className={cn(
            `flex h-11 w-full rounded-lg border-0 bg-[rgb(var(--color-surface))] px-4 py-3 text-sm text-[rgb(var(--color-text))] shadow-lg backdrop-blur-sm transition-all duration-300 
            file:border-0 file:bg-transparent file:text-sm file:font-medium 
            placeholder:text-[rgb(var(--color-text-secondary))] 
            focus:bg-card focus:shadow-xl focus:ring-2 focus:ring-[rgb(var(--color-primary))]/30 focus:outline-none
            group-hover/input:bg-card group-hover/input:shadow-xl
            disabled:cursor-not-allowed disabled:opacity-50
            dark:bg-[rgb(var(--color-surface))] dark:text-[rgb(var(--color-text))]`,
            className,
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  },
);
Input.displayName = "Input";

export { Input };