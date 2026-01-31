import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
}

export function Button({ className, disabled, isLoading, children, ...props }: ButtonProps) {
  const isDisabled = disabled || isLoading
  return (
    <button
      {...props}
      disabled={isDisabled}
      className={clsx(
        'inline-flex items-center justify-center gap-2',
        'h-[55px] w-full rounded-[12px] bg-[color:var(--color-primary)] text-white',
        'text-[14px] font-medium',
        'shadow-[0_12px_28px_rgba(6,1,179,0.24)]',
        'transition-transform duration-150 active:scale-[0.99]',
        isDisabled && 'opacity-60 active:scale-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-primary)]',
        className,
      )}
    >
      {isLoading ? (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
          aria-hidden="true"
        />
      ) : null}
      {children}
    </button>
  )
}
