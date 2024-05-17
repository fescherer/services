import { AboutUs } from './about-us'
import { Contact } from './contact'
import { CoreValues } from './core-values'
import { Faq } from './faq'
import { Hero } from './hero'
import { OurServices } from './our-services'
import { ServingWithExcellence } from './serving-with-excellence'
import { Socials } from './socials'
import { Traits } from './traits'

export function Home() {
  return (
    <div>
      <div className="relative">
        <Hero />
        <Traits />
      </div>

      <div className="my-40 space-y-40">
        <AboutUs />
        <CoreValues />
        <OurServices />
        <ServingWithExcellence />
        <Faq />
        <Contact />
        <Socials />
      </div>
    </div>
  )
}
