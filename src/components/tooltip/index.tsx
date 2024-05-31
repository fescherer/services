'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { PropsWithChildren } from 'react'

type TooltipProps = {
  tooltip: string
}

export function Tooltip({ children, tooltip }: PropsWithChildren<TooltipProps>) {
  return (
    <TooltipPrimitive.Provider delayDuration={100}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content className="select-none rounded border border-secondary-border bg-secondary p-4 text-sm leading-none text-secondary-label-primary will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade">
            {tooltip}
            <TooltipPrimitive.Arrow className="fill-secondary" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
