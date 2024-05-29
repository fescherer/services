import { SectionWrapper } from '@/components/section-wrapper'
import { IllustratorIcon } from '@/icons/tech/illustrator'
import { NextJSIcon } from '@/icons/tech/nextjs'
import { PhotoshopIcon } from '@/icons/tech/photoshop'
import { WordpressIcon } from '@/icons/tech/wordpress'

const DATA = [
  {
    id: crypto.randomUUID(),
    name: 'Web Development',
    image: '/services/web-design.webp',
    color1: '#DB2763',
    color2: '#B0DB43',
    additional: (
      <>
        <NextJSIcon />
        <WordpressIcon />
      </>
    ),
  },
  {
    id: crypto.randomUUID(),
    name: 'Consulting',
    image: '/services/consulting.webp',
    additional: <></>,
    color1: '#E4F3E3',
    color2: '#5CA9E9',
  },
  {
    id: crypto.randomUUID(),
    name: 'Image Restoration using AI',
    image: '/services/image-restoration.webp',
    additional: <></>,
    color1: '#91F1EF',
    color2: '#FFD5E0',
  },
  {
    id: crypto.randomUUID(),
    name: 'Visual Identity (Logo, colors...)',
    image: '/services/logo-design.webp',
    additional: (
      <>
        <IllustratorIcon />
        <PhotoshopIcon />
      </>
    ),
    color1: ' #870057',
    color2: '#A5303F',
  },
  {
    id: crypto.randomUUID(),
    name: 'Image Editing',
    image: '/services/photoshop.webp',
    additional: (
      <>
        <IllustratorIcon />
        <PhotoshopIcon />
      </>
    ),
    color1: '#EEBBD5',
    color2: '#2F284E',
  },
]

export function OurServices() {
  return (
    <SectionWrapper title="Our Services" wrapperClassName="bg-[#fAfAfA]">
      <div className="flex flex-wrap justify-around gap-6 pt-6">
        {
          DATA.map(service => (
            <div key={service.id} className="relative h-[280px] w-[200px] overflow-hidden border-4 bg-secondary bg-cover text-[#ffffff]" style={{ backgroundImage: `url(${service.image})`, borderImage: `linear-gradient(to bottom right, ${service.color1}, ${service.color2}) 1` }}>
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
