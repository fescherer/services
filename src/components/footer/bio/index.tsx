import { DATA } from '@/app.config'
import { Tooltip } from '@/components/tooltip'
import { DiscordIcon, FigmaIcon, GithubIcon, InstagramIcon, LinkedinIcon, PinterestIcon, RedditIcon, TiktokIcon, TwitterIcon } from '@/icons'
import { LogoIcon } from '@/icons/logo'
import { YoutubeIcon } from '@/icons/youtube'
import Link from 'next/link'

export function Bio() {
  const links = [
    {
      label: 'Go to Linkedin\'s author',
      href: '',
      icon: <LinkedinIcon />,
      tooltip: 'Linkedin @fescherer',
    },
    {
      label: 'Go to Github\'s author',
      href: '',
      icon: <GithubIcon />,
      tooltip: 'Github @fescherer',
    },
    {
      label: 'Go to \'s author',
      href: '',
      icon: <YoutubeIcon />,
      tooltip: 'Youtube @fescherer',
    },
    {
      label: 'Go to \'s author',
      href: '',
      icon: <DiscordIcon />,
      tooltip: 'Discord @fescherer',
    },
    {
      label: 'Go to \'s author',
      href: '',
      icon: <FigmaIcon />,
      tooltip: 'Figma @fescherer',
    },
    {
      label: 'Go to \'s author',
      href: '',
      icon: <TiktokIcon />,
      tooltip: 'Tiktok @fescherer',
    },
    {
      label: 'Go to \'s author',
      href: '',
      icon: <RedditIcon />,
      tooltip: 'Reddit @fescherer',
    },
    {
      label: 'Go to \'s author',
      href: '',
      icon: <PinterestIcon />,
      tooltip: 'Pinterest @fescherer',
    },
    {
      label: 'Go to \'s author',
      href: '',
      icon: <InstagramIcon />,
      tooltip: 'Instagram @fescherer',
    },
    {
      label: 'Go to \'s author',
      href: '',
      icon: <TwitterIcon />,
      tooltip: 'Twitter @fescherer',
    },
  ]

  return (
    <div className="flex max-w-80 flex-col gap-2">

      <LogoIcon />
      <p className="max-w-prose text-sm text-secondary-label-secondary">{DATA.company_bio}</p>

      <div className="flex flex-wrap justify-center gap-4">
        <Tooltip tooltip="Subscribe to RSS">
          <Link className="mui-icon-filled" aria-label="Go to RSS's author" href="/feed.xml">rss_feed</Link>
        </Tooltip>

        {
          links.map(link => (
            <Tooltip key={link.tooltip} tooltip={link.tooltip}>
              <Link aria-label={link.label} href={link.href}>{link.icon}</Link>
            </Tooltip>
          ))
        }
      </div>
    </div>
  )
}
