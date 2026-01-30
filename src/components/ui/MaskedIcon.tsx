import clsx from 'clsx'

export default function MaskedIcon({
  src,
  className,
  title,
}: {
  src: string
  className?: string
  title?: string
}) {
  return (
    <span
      aria-hidden={title ? undefined : true}
      title={title}
      className={clsx(
        'inline-block bg-current [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]',
        className,
      )}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
      }}
    />
  )
}
