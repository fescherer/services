import { SectionWrapper } from '@/components/section-wrapper'

const traits = [
  {
    id: crypto.randomUUID(),
    text: 'Organized & Efficient',
    icon: 'list_alt',
  },
  {
    id: crypto.randomUUID(),
    text: 'Trustworthy & Reliable',
    icon: 'verified',
  },
  {
    id: crypto.randomUUID(),
    text: 'Passionate & Dedicated',
    icon: 'favorite',
  },
]
export function Traits() {
  return (
    <SectionWrapper>
      <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-4">
        {
        traits.map(trait => (
          <div key={trait.id} className="h-40 bg-secondary-label-primary">
            <span className="mui-icon-filled">{trait.icon}</span>
            <span>{trait.text}</span>
          </div>
        ))
      }
      </div>
    </SectionWrapper>
  )
}
