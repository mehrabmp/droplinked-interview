import * as React from 'react';
import { cn } from '@/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn('rounded-lg p-4 dark:bg-neutral-800', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

export default Card;
