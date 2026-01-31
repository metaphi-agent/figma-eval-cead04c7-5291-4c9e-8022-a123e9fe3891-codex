import type { ReactNode } from 'react'
import clsx from 'clsx'

type PhoneFrameProps = {
  children: ReactNode
  className?: string
}

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div className="min-h-dvh bg-[var(--color-bg)] px-4 py-6">
      <div
        className={clsx(
          'mx-auto w-full max-w-[375px] overflow-hidden rounded-[28px] bg-[var(--color-bg)]',
          'shadow-[0_18px_60px_rgba(16,24,40,0.12)]',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
