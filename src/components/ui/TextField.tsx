import clsx from 'clsx'
import type { InputHTMLAttributes, ReactNode } from 'react'

type TextFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
  right?: ReactNode
  error?: string
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode']
  autoComplete?: string
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  right,
  error,
  inputMode,
  autoComplete,
}: TextFieldProps) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <div
        className={clsx(
          'flex h-[54px] items-center gap-3 bg-[color:var(--color-surface)] px-4',
          'border-b border-[color:var(--color-divider)]',
          'transition-colors duration-150',
          error ? 'border-[color:var(--color-accent)]' : 'focus-within:border-[color:var(--color-primary)]',
        )}
      >
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          inputMode={inputMode}
          autoComplete={autoComplete}
          className={clsx(
            'h-full w-full bg-transparent text-[13px] leading-[19.5px] text-[color:var(--color-ink)] outline-none',
            'placeholder:text-[color:rgba(85,85,85,0.70)]',
          )}
        />
        {right}
      </div>
      {error ? <p className="mt-2 text-xs text-[color:var(--color-accent)]">{error}</p> : null}
    </label>
  )
}
