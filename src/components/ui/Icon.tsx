import clsx from 'clsx'

type IconProps = {
  src: string
  alt?: string
  size?: number
  className?: string
}

export function Icon({ src, alt = '', size = 20, className }: IconProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={clsx('inline-block select-none', className)}
      draggable={false}
    />
  )
}

