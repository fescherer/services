import { SectionWrapper } from '@/components/section-wrapper'

const servingWithExcellence = [
  {
    id: crypto.randomUUID(),
    text: 'Metrics, SEO and Google Analytics',
    icon: 'query_stats',
  },
  {
    id: crypto.randomUUID(),
    text: 'Best Web Practices',
    icon: 'thumb_up_alt',
  },
  {
    id: crypto.randomUUID(),
    text: 'Fast and Affordable',
    icon: 'view_kanban',
  },
  {
    id: crypto.randomUUID(),
    text: 'Prototype Presentation',
    icon: 'co_present',
  },
  // {
  //   id: crypto.randomUUID(),
  //   text: '7 days garant',
  //   icon: 'approval',
  // },
  // {
  //   id: crypto.randomUUID(),
  //   text: 'prices editor',
  //   icon: 'mode_edit',
  // },
  {
    id: crypto.randomUUID(),
    text: 'Domain and Server Configuration',
    icon: 'dns',
  },
  {
    id: crypto.randomUUID(),
    text: '3 Extra Changes in 7 Days',
    icon: 'published_with_changes',
  },
]
export function ServingWithExcellence() {
  return (
    <div className="bg-secondary">
      <SectionWrapper title="Serving with Excellence">
        <div className="flex flex-wrap justify-around gap-6 pt-6">
          {
          servingWithExcellence.map(service => (
            <div key={service.id} className="relative h-[240px] w-[200px] overflow-hidden rounded bg-accent text-accent-label-primary">
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-3 text-center font-medium">
                <span className="mui-icon-filled text-4xl opacity-70">{service.icon}</span>
                <span>{service.text}</span>
              </div>
            </div>
          ))
        }
        </div>
      </SectionWrapper>
    </div>
  )
}
