import { SectionWrapper } from '@/components/section-wrapper'

// cada service vai ter uma borda de uma cor

export function OurServices() {
  return (
    <SectionWrapper title="Our Services">
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
