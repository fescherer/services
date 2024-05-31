import { SectionWrapper } from '@/components/section-wrapper'
import Image from 'next/image'

export function AboutUs() {
  return (
    <div className="relative bg-secondary pt-40">
      {/* <div className="custom-shape-divider-top-1716422643">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
        </svg>
      </div> */}

      <SectionWrapper className="">
        <div className="flex flex-col items-center justify-between space-y-14 md:flex-row md:space-x-14 md:space-y-0">
          <Image src="/aboutus.webp" width={300} height={561} alt="Computer above a table" />

          <div className="space-y-4">
            <h2 className="text-2xl font-medium text-primary-label-primary">About us</h2>
            <p className="text-primary-label-secondary">We are a passionate web design and branding company. We take the time to understand your vision and craft a website and brand identity that speaks volumes about your business. We are excited to help you build a brand and website that gets you noticed. Let&apos;s chat about your project today!</p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
