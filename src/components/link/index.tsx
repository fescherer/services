import { cn } from '@/utils/cn'
import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

type LinkType = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ children, className, href, ...props }: PropsWithChildren<LinkType>) {
  return <NextLink className={cn('text-primary-label-primary underline transition-all hover:text-accent-active', className)} href={href} {...props}>{children}</NextLink>
}
