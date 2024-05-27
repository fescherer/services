import { SectionWrapper } from '@/components/section-wrapper'
import { IllustratorIcon } from '@/icons/tech/illustrator'
import { NextJSIcon } from '@/icons/tech/nextjs'
import { PhotoshopIcon } from '@/icons/tech/photoshop'
import { WordpressIcon } from '@/icons/tech/wordpress'

// cada service vai ter uma borda de uma cor

const DATA = [
  {
    id: crypto.randomUUID(),
    name: 'Consulting',
    image: '/services/consulting.webp',
    additional: <></>,
  },
  {
    id: crypto.randomUUID(),
    name: 'image restoration (ai)',
    image: '/services/image-restoration.webp',
    additional: <></>,
  },
  {
    id: crypto.randomUUID(),
    name: 'web design logo + identity',
    image: '/services/logo-design.webp',
    additional: (
      <>
        <IllustratorIcon />
        <PhotoshopIcon />
      </>
    ),
  },
  {
    id: crypto.randomUUID(),
    name: 'web development',
    image: '/services/web-design.webp',
    additional: (
      <>
        <NextJSIcon />
        <WordpressIcon />
      </>
    ),
  },
  {
    id: crypto.randomUUID(),
    name: 'image edit',
    image: '/services/photoshop.webp',
    additional: (
      <>
        <IllustratorIcon />
        <PhotoshopIcon />
      </>
    ),
  },
]

export function OurServices() {
  return (
    <SectionWrapper title="Our Services" wrapperClassName="bg-[#fAfAfA]">
      <div className="flex flex-wrap gap-2">
        {
          DATA.map(service => (
            <div key={service.id} className="relative h-[280px] w-[200px] bg-secondary bg-cover text-[#ffffff]" style={{ backgroundImage: `url(${service.image})` }}>
              <div className="absolute size-full bg-[#00000088]" />
              <div className="absolute size-full bg-gradient-to-t from-secondary-label-primary from-[1%] via-transparent to-secondary-label-primary to-90%" />

              <div className="absolute left-1/2 top-6 -translate-x-1/2 text-center text-2xl font-medium ">
                <span>{service.name}</span>
              </div>

              <div className="absolute bottom-2 right-2 flex flex-wrap gap-2">
                {service.additional}
              </div>
            </div>
          ))
        }
      </div>
    </SectionWrapper>
  )
}
