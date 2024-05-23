import { SectionWrapper } from '@/components/section-wrapper'

const servingWithExcellence = [
  {
    id: crypto.randomUUID(),
    text: 'SEO + GOOGLE ANALYTICS',
    icon: 'query_stats',
  },
  {
    id: crypto.randomUUID(),
    text: 'Best web practices',
    icon: 'thumb_up_alt',
  },
  {
    id: crypto.randomUUID(),
    text: 'Ready to go preemade projects',
    icon: 'view_kanban',
  },
  {
    id: crypto.randomUUID(),
    text: 'Prototype presentation',
    icon: 'co_present',
  },
  {
    id: crypto.randomUUID(),
    text: '7 days garant',
    icon: 'approval',
  },
  {
    id: crypto.randomUUID(),
    text: 'prices editor',
    icon: 'mode_edit',
  },
  {
    id: crypto.randomUUID(),
    text: 'Domain and server configuration',
    icon: 'dns',
  },
  {
    id: crypto.randomUUID(),
    text: '3 extra changes in 7 days',
    icon: 'published_with_changes',
  },
]
export function ServingWithExcellence() {
  return (
    <SectionWrapper>
      <h2>Serving with Excellence</h2>

      <div className="flex flex-wrap gap-2">
        {
          servingWithExcellence.map(service => (
            <div key={service.id} className="flex flex-col items-center bg-accent-active p-2">
              <span className="mui-icon-filled text-6xl">{service.icon}</span>
              <span>{service.text}</span>
            </div>
          ))
        }
      </div>
    </SectionWrapper>
  )
}
