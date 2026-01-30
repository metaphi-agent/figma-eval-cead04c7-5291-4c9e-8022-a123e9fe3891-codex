import clsx from 'clsx'
import type { ReactNode } from 'react'
import MaskedIcon from './MaskedIcon'

export default function SettingsRow({
  iconSrc,
  title,
  subtitle,
  endAdornment,
  onClick,
  danger,
}: {
  iconSrc: string
  title: string
  subtitle?: string
  endAdornment?: ReactNode
  onClick?: () => void
  danger?: boolean
}) {
  const content = (
    <>
      <div className="w-10 h-10 rounded-full bg-[#F1F3FF] grid place-items-center shrink-0">
        <MaskedIcon src={iconSrc} className="w-5 h-5 text-[var(--color-primary)]" />
      </div>

      <div className="min-w-0 flex-1">
        <div
          className={clsx(
            'text-[13px] leading-5 font-medium',
            danger ? 'text-[var(--color-danger)]' : 'text-[var(--color-ink)]',
          )}
        >
          {title}
        </div>
        {subtitle ? (
          <div className="mt-0.5 text-[11px] leading-4 text-[#9A9A9A] truncate">
            {subtitle}
          </div>
        ) : null}
      </div>

      {endAdornment ? <div className="shrink-0">{endAdornment}</div> : null}
    </>
  )

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={clsx(
          'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150 hover:bg-black/5 active:bg-black/10',
        )}
      >
        {content}
      </button>
    )
  }

  return <div className="w-full flex items-center gap-3 px-4 py-3">{content}</div>
}
