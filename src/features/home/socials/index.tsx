import { SectionWrapper } from '@/components/section-wrapper'

export function Socials() {
  return (
    <SectionWrapper title="Want to know more? Follow our socials">
      <div className="flex flex-col">
        {['facebook', 'instagram'].map(item => <span key={item}>{item}</span>)}
      </div>
    </SectionWrapper>
  )
}
