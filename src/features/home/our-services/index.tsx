import { SectionWrapper } from '@/components/section-wrapper'

export function OurServices() {
  return (
    <SectionWrapper>
      <h2>Our Services</h2>

      <div className="flex gap-2">
        {
        ['Consulting', 'webdevelopment - nextjs, wordpress', 'image edit', 'image restauration (ai)', 'web design logo + identity'].map(service => (
          <div key={service} className="bg-secondary">
            <span>{service}</span>
          </div>
        ))
      }
      </div>
    </SectionWrapper>
  )
}
