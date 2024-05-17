import { PropsWithChildren } from 'react'

export function SectionWrapper({ children }: PropsWithChildren) {
  return (
    <section className="m-auto max-w-screen-md">
      { children }
    </section>
  )
}
