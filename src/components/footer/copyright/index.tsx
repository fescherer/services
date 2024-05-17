import { DATA } from '@/app.config'
import Link from 'next/link'

export function Copyright() {
  const initialDate = new Date('2023-08-20')
  const today = new Date()

  return (
    <div className="m-auto my-6 flex max-w-screen-lg flex-col items-center">
      <small>
        Copyright © 🞄
        {`${initialDate.getFullYear().toString()} - ${today.getFullYear().toString()}`}
      </small>

      <small>
        <Link aria-label={`Go to Github's ${DATA.company} page`} className="transition-all hover:text-accent-active" href={DATA.company_page} target="_blank">
          {DATA.company}
        </Link>
      </small>
    </div>
  )
}
