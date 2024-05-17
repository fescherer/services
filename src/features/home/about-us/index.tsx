import { SectionWrapper } from '@/components/section-wrapper'

export function AboutUs() {
  return (
    <SectionWrapper>
      <div className="flex justify-between space-x-8">
        <div className="min-h-40 min-w-40 rounded-full bg-accent" />

        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-primary-label-primary">About us</h2>
          <p className="text-primary-label-secondary">We are a passionate web design and branding company. We take the time to understand your vision and craft a website and brand identity that speaks volumes about your business. We are excited to help you build a brand and website that gets you noticed. Let&apos;s chat about your project today!</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
