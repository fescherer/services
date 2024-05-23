import { SectionWrapper } from '@/components/section-wrapper'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* <Image className="absolute size-full object-cover" src="/hero.webp" alt="hero image" width={1600} height={500} /> */}
      {/* <div className="absolute size-full bg-[#000000aa]" /> */}

      <SectionWrapper className="absolute inset-0 flex -translate-y-20 items-center justify-between text-primary-label-primary">
        <div>
          <h2>Build whatever you want</h2>
          <h3>Felipe Scherer Dev</h3>
          <h3>Fennec Tales Studio</h3>
        </div>

      </SectionWrapper>

      <Image className="absolute right-0 h-full w-1/2 object-cover" src="/hero2.png" alt="" width={500} height={500} />

      <div className="custom-shape-divider-bottom-1716425581">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" />
        </svg>
      </div>
    </section>
  )
}
