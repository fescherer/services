import { SectionWrapper } from '@/components/section-wrapper'
import { GithubIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '@/icons'
import Link from 'next/link'

const DATA_SOCIAL = [
  {
    id: crypto.randomUUID(),
    name: 'Blog',
    text: 'Fresh industry insights published bi-weekly.',
    image: '',
    link: 'https://fennectales.com',
    icon: <span className="mui-icon-filled">rss_feed</span>,
  },
  {
    id: crypto.randomUUID(),
    name: 'YouTube Channel',
    text: 'New videos showcasing our expertise every 2 weeks.',
    image: '',
    link: '',
    icon: <YoutubeIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: 'Instagram',
    text: 'Get a glimpse into our company culture and team.',
    image: '',
    link: '',
    icon: <InstagramIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: 'LinkedIn',
    text: 'Follow us for company updates and industry news.',
    image: '',
    link: '',
    icon: <LinkedinIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: 'Github',
    text: 'Explore our open-source projects and contribute to the community.',
    image: '',
    link: '',
    icon: <GithubIcon />,
  },
]

export function Socials() {
  return (
    <div className="relative min-h-screen pt-24">
      <div className="custom-shape-divider-top-1716426420 -scale-x-100">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" />
        </svg>
      </div>

      <SectionWrapper title="Connect With Us!">
        <p className="pb-4 pt-2">
          Stay updated and engaged with our latest content across various platforms:
        </p>

        <div className="flex flex-col gap-4">
          {
          DATA_SOCIAL.map(item => (
            <Link target="_blank" href={item.link} key={item.id} className="group rounded border border-primary-border p-2 transition-all hover:scale-105 hover:border-accent">
              <div className="flex justify-between">
                <div className="flex gap-2 transition-all group-hover:text-accent">
                  <div className="opacity-85">{item.icon}</div>
                  <h3 className="font-medium">{item.name}</h3>
                </div>

                <span className="mui-icon-filled opacity-85 transition-all group-hover:text-accent">open_in_new</span>
              </div>

              <p>{item.text}</p>
            </Link>
          ))
        }
        </div>
      </SectionWrapper>
    </div>
  )
}
