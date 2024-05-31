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
    <SectionWrapper className="py-0">
      <div className="absolute -bottom-20 left-1/2 z-50 flex w-full max-w-screen-md -translate-x-1/2 justify-between">
        {
          traits.map(trait => (
            <div key={trait.id} className="flex flex-col items-center gap-4 rounded bg-accent px-5 py-20 font-medium text-accent-label-primary shadow-md">
              <span className="mui-icon-filled text-4xl">{trait.icon}</span>
              <span>{trait.text}</span>
            </div>
          ))
        }
      </div>
    </SectionWrapper>
  )
}
