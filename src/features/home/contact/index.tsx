'use client'

import { SectionWrapper } from '@/components/section-wrapper'
import { InstagramIcon, LinkedinIcon } from '@/icons'
import Link from 'next/link'

const DATA_CONTATACT = [
  {
    id: crypto.randomUUID(),
    title: 'Email',
    link: 'mailto:felipescherer25@gmail.com',
    text: 'felipescherer25@gmail.com',
    icon: <span className="mui-icon-filled">email</span>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Instagram',
    link: '',
    icon: <InstagramIcon />,
  },
  {
    id: crypto.randomUUID(),
    title: 'Linkedin',
    link: '',
    icon: <LinkedinIcon />,
  },
]

export function Contact() {
  function copyContent(event: any, text: string) {
    navigator.clipboard.writeText(text)
    event.stopPropagation()
    event.preventDefault()
  }

  return (
    <div className="bg-secondary">
      <SectionWrapper title="Get in contact">
        <p className="py-2">To get in touch with us, you can use one of these channels: </p>

        <div className="my-4 flex justify-between gap-6">
          {
          DATA_CONTATACT.map(contact => (
            <Link href={contact.link} target="_blank" key={contact.id} className="relative flex min-h-40 w-full items-center justify-center p-4 shadow-md transition-all hover:scale-110">
              <div className="flex flex-col items-center gap-2">
                <div className="opacity-85">{contact.icon}</div>
                <h3>{contact.title}</h3>
                <p className="opacity-80">{contact.text}</p>
              </div>

              <div className="absolute right-2 top-2 flex gap-4 opacity-70">
                {
                  contact.text && <button onClick={event => copyContent(event, contact.text)} type="button" className="mui-icon-filled">content_copy</button>
                }

                <span className="mui-icon-filled transition-all group-hover:text-accent">open_in_new</span>
              </div>
            </Link>
          ))
        }
        </div>
      </SectionWrapper>
    </div>
  )
}
