import { SectionWrapper } from '@/components/section-wrapper'

export function ServingWithExcellence() {
  return (
    <SectionWrapper>
      <h2>Serving with Excellence</h2>

      <div className="flex gap-2">
        {
        ['Best web practices', 'SEO + GOOGLE ANALYTICS', 'Ready to go preemade projects', 'Prototype presentation', '7 days garant', 'prices editor', 'Domain and server configuration', '3 extra changes in 7 days'].map(service => (
          <div key={service} className="bg-secondary">
            <span>{service}</span>
          </div>
        ))
      }
      </div>
    </SectionWrapper>
  )
}
