export default function Button({
  href,
  children,
  variant,
  type, // Support legacy 'type' prop
  className = '',
  ...props
}) {
  // Use 'type' as fallback for 'variant' for backwards compatibility
  // Default to 'ghost' for navigation buttons (old behavior)
  const buttonVariant = variant || type || 'ghost'

  const base = `
    inline-flex items-center justify-center rounded-md
    px-3 py-2 text-sm font-medium transition-smooth
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    focus-visible:ring-primary focus-visible:ring-offset-bg
  `
  const variants = {
    primary: `
      bg-text text-bg hover:bg-muted transition-smooth px-6 py-3
      dark:bg-white dark:text-bg dark:hover:bg-gray-200
    `,
    ghost: `
      text-text hover:text-primary hover:bg-surface-hover
      dark:text-white dark:hover:bg-white/5
    `,
    neutral: `
      bg-surface text-text hover:bg-surface-hover border border-surface-hover
      dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700
    `,
    outline: `
      border border-surface-hover text-text hover:bg-surface-hover
      dark:border-slate-600 dark:text-white dark:hover:bg-white/10
    `,
  }
  const classes = [base, variants[buttonVariant], className].join(' ')
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
