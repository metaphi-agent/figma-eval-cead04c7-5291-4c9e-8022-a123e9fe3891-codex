import clsx from 'clsx'
import type { ReactNode } from 'react'

export default function MobileViewport({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className="min-h-screen bg-[var(--color-app-bg)] flex justify-center">
      <div
        className={clsx(
          'w-full max-w-[375px] min-h-screen bg-[var(--color-app-bg)] relative',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
