import { SectionWrapper } from '@/components/section-wrapper'

export function Hero() {
  return (
    <section className="min-h-screen">
      <SectionWrapper className="flex h-full items-center justify-between">
        <div>
          <h2>Build whatever you want</h2>
          <h3>Felipe Scherer Dev</h3>
          <h3>Fennec Tales Studio</h3>
        </div>

        <div className="size-40 bg-accent" />
      </SectionWrapper>
    </section>
  )
}
