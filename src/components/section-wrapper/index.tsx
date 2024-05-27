import { cn } from '@/utils/cn'
import { HTMLAttributes, PropsWithChildren } from 'react'

type TSectionWrapper = PropsWithChildren & HTMLAttributes<HTMLBaseElement>

interface ISectionWrapper extends TSectionWrapper {
  title?: string
  wrapperClassName?: string
}

export function SectionWrapper({ children, className, wrapperClassName, title, ...props }: ISectionWrapper) {
  return (
    <div className={cn('relative', wrapperClassName)}>
      <section className={cn('m-auto max-w-screen-md px-4 py-40', className)} {...props}>
        {!!title && <h2 className="text-2xl font-medium text-primary-label-primary">{title}</h2>}
        {children}
      </section>
    </div>
  )
}
