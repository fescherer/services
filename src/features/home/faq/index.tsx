import { SectionWrapper } from '@/components/section-wrapper'

export function Faq() {
  return (
    <SectionWrapper>
      <h2>FAQ</h2>

      accordion ??
      <div className="flex flex-col gap-2">
        {
        [1, 2, 3, 4].map(item => <div key={item} className="h-10 w-full bg-accent" />)
      }
      </div>
    </SectionWrapper>
  )
}
