'use client'

import { cn } from '@/utils/cn'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

interface SeparatorProps extends SeparatorPrimitive.SeparatorProps {
  layer: 'primary' | 'secondary' | 'accent'
}

export function Separator({ layer, className, ...props }: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      className={cn('border-b', className, {
        'border-primary-border': layer === 'primary',
        'border-secondary-border': layer === 'secondary',
        'border-accent-border': layer === 'accent',
      })}
      {...props}
    />
  )
}
