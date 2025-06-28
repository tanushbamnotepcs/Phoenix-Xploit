import { cn } from '../lib/utils'

const MaxWidthWrapper = ({
  className,
  children,
  size = 'xl',
  fullWidth = false, 
}) => {
  const widthMap = {
    'xs': 'mx-auto w-full max-w-screen-sm px-2.5 md:px-6',
    'sm': 'mx-auto w-full max-w-screen-md px-2.5 md:px-8',
    'md': 'mx-auto w-full max-w-screen-lg px-2.5 md:px-12',
    'lg': 'mx-auto w-full max-w-screen-xl px-2.5 md:px-16',
    'xl': 'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
    '2xl': 'mx-auto w-full max-w-screen-2xl px-2.5 md:px-24',
    '3xl': 'mx-auto w-full max-w-screen-3xl px-2.5 md:px-32',
  }

  return (
    <div
      className={cn(
        'h-full ',
        !fullWidth ? (widthMap[size] || widthMap.xl) : 'w-full',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper