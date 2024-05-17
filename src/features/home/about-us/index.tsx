import { SectionWrapper } from '@/components/section-wrapper'

export function AboutUs() {
  return (
    <SectionWrapper>
      <div className="flex justify-between space-x-8">
        <div className="min-h-40 min-w-40 rounded-full bg-accent" />

        <div>
          <h2>Servimos plataformas web pelo mundo inteiro</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores culpa, fuga et repellendus debitis ut doloremque a ab blanditiis labore quos iure velit impedit quis saepe molestiae ipsum mollitia aperiam?</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
