import type { PropsWithChildren } from 'react'

export function H1({ children, ...props }: PropsWithChildren) {
  return (
    <h1 className="text-3xl font-medium tracking-wide" {...props}>{children}</h1>
  )
}

export function H2({ children, ...props }: PropsWithChildren) {
  return (
    <h2 className="text-2xl font-medium tracking-wide" {...props}>{children}</h2>
  )
}

export function H3({ children, ...props }: PropsWithChildren) {
  return (
    <h3 className="text-xl font-medium tracking-wide" {...props}>{children}</h3>
  )
}

export function ListUnorganized({ children, ...props }: PropsWithChildren) {
  return (
    <ul className="my-2 ml-6 list-disc" {...props}>{children}</ul>
  )
}

export function Text({ children, ...props }: PropsWithChildren) {
  return (
    <p className="my-2" {...props}>
      {children}
    </p>
  )
}

export function ListItem({ children, ...props }: PropsWithChildren) {
  return (
    <li className="text-base" {...props}>{children}</li>
  )
}
