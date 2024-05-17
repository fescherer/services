import { cn } from '@/utils/cn'
import { HTMLAttributes, PropsWithChildren } from 'react'

type TSeectionWrapper = PropsWithChildren & HTMLAttributes<HTMLBaseElement>

export function SectionWrapper({ children, className, ...props }: TSeectionWrapper) {
  return (
    <section className={cn('m-auto max-w-screen-md', className)} {...props}>
      { children }
    </section>
  )
}
