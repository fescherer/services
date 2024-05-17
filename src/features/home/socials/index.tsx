import { SectionWrapper } from '@/components/section-wrapper'

export function Socials() {
  return (
    <SectionWrapper>
      <h2>Want to know more? Follow our socials</h2>

      <div className="flex flex-col">
        {['facebook', 'instagram'].map(item => <span key={item}>{item}</span>)}
      </div>
    </SectionWrapper>
  )
}
