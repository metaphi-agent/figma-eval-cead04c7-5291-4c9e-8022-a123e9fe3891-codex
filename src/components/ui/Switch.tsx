import clsx from 'clsx'

export default function Switch({
  checked,
  onCheckedChange,
  disabled,
}: {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={clsx(
        'w-[44px] h-[26px] rounded-full p-[3px] transition-colors duration-150',
        checked ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border)]',
        disabled && 'opacity-60 cursor-not-allowed',
      )}
    >
      <span
        className={clsx(
          'block w-[20px] h-[20px] bg-white rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.18)] transition-transform duration-150',
          checked ? 'translate-x-[18px]' : 'translate-x-0',
        )}
      />
    </button>
  )
}
