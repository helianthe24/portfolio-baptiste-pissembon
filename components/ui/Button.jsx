export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const base = `
    inline-flex items-center justify-center rounded-md
    px-6 py-3 text-sm font-medium transition
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    focus-visible:ring-primary-600 focus-visible:ring-offset-bg
  `
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-600',
    neutral: `
      bg-neutral-900 text-white hover:bg-neutral-800
      dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200
    `,
    outline: `
      border border-neutral-300 text-neutral-900 hover:bg-neutral-50
      dark:border-neutral-600 dark:text-white dark:hover:bg-white/10
    `,
  }
  const classes = [base, variants[variant], className].join(' ')
  if (href)
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
