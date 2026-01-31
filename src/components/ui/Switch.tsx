import { useId } from 'react'
import clsx from 'clsx'

type SwitchProps = {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label: string
  variant?: 'primary' | 'accent'
  className?: string
}

export function Switch({ checked, onCheckedChange, label, variant = 'primary', className }: SwitchProps) {
  const id = useId()
  const onColor =
    variant === 'accent' ? 'bg-[color:var(--color-accent)]' : 'bg-[color:var(--color-primary)]'
  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <span className="sr-only" id={`${id}-label`}>
        {label}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        onClick={() => onCheckedChange(!checked)}
        className={clsx(
          'relative h-[30px] w-[51px] rounded-full p-[5px] transition-colors duration-150',
          checked ? onColor : 'bg-[color:var(--color-divider)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)]',
        )}
      >
        <span
          className={clsx(
            'block h-5 w-5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-transform duration-150',
            checked ? 'translate-x-[21px]' : 'translate-x-0',
          )}
        />
      </button>
    </div>
  )
}
