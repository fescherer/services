import { SectionWrapper } from '@/components/section-wrapper'

export function Hero() {
  return (
    <section className="relative min-h-screen ">
      <SectionWrapper className="m-auto flex items-center justify-between text-center text-primary-label-primary">
        <div className="text-4xl">
          <h2 className="mb-4 text-7xl font-bold">
            Build whatever you
            <strong className="text-secondary"> want</strong>
          </h2>

          <h3>Felipe Scherer Dev</h3>
          <h3>Fennec Tales Studio</h3>
          <h3 className="my-5 text-3xl font-medium text-secondary">Software house</h3>
        </div>

      </SectionWrapper>

      <div className="custom-shape-divider-bottom-1716425581">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" />
        </svg>
      </div>
    </section>
  )
}
