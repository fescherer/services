import { Link } from '@/components/link'

// TODO PUT LINKS

const links = [
  // {
  //   heading: 'INFORMATION',
  //   links: [
  //     {
  //       href: '/services',
  //       name: 'Services',
  //     },
  //     {
  //       href: '/about-us',
  //       name: 'About Us',
  //     },
  //   ],
  // },
  {
    heading: 'SUPPORT',
    links: [
      {
        href: '/privacy-policy',
        name: 'Privacy Policy',
      },
      {
        href: '/terms-of-use',
        name: 'Terms of use',
      },
    ],
  },
]

export function SiteMap() {
  return (
    <>
      {
        links.map(section => (
          <div key={section.heading} className="flex flex-col">
            <h2 className="font-medium uppercase">{section.heading}</h2>

            {
              section.links.map(link => (
                <Link
                  key={link.href}
                  className="text-secondary-label-secondary transition-all hover:text-accent-active"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))
            }
          </div>
        ))
      }
    </>
  )
}
