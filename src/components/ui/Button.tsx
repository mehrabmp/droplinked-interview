import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils';

const buttonVariants = cva(
  'flex items-center justify-center rounded-lg font-medium transition',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-[#084836]',
        secondary: 'bg-neutral-500 text-white',
      },
      size: {
        default: 'py-1 px-6',
        sm: 'h-9 px-2',
        lg: 'h-11 px-8',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export default Button;
