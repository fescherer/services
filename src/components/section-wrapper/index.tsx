import { cn } from '@/utils/cn'
import { HTMLAttributes, PropsWithChildren } from 'react'

type TSectionWrapper = PropsWithChildren & HTMLAttributes<HTMLBaseElement>

interface ISectionWrapper extends TSectionWrapper {
  title?: string
}

export function SectionWrapper({ children, className, title, ...props }: ISectionWrapper) {
  return (
    <section className={cn('m-auto max-w-screen-md py-40', className)} {...props}>
      {!!title && <h2 className="text-2xl font-medium text-primary-label-primary">{title}</h2>}
      {children}
    </section>
  )
}
