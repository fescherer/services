import { DiscordIcon } from './discord'
import { FacebookIcon } from './facebook'
import { FigmaIcon } from './figma'
import { GithubIcon } from './github'
import { InstagramIcon } from './instagram'
import { LinkedinIcon } from './linkedin'
import { PinterestIcon } from './pinterest'
import { ProfileIcon } from './profile'
import { RedditIcon } from './reddit'
import { TelegramIcon } from './telegram'
import { TiktokIcon } from './tiktok'
import { TwitterIcon } from './twitter'
import { WhatsAppIcon } from './whatsapp'
import { YoutubeIcon } from './youtube'

type SocialIconProps = {
  id: 'discord' | 'facebook' | 'figma' | 'github' | 'instagram' | 'linkedin' | 'pinterest' | 'reddit' | 'telegram' | 'tiktok' | 'twitter' | 'whatsapp' | 'youtube'
}

export function SocialIcon({ id }: SocialIconProps) {
  const icons = [
    {
      id: 'discord',
      name: 'Discord',
      icon: <DiscordIcon />,
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: <FacebookIcon />,
    },
    {
      id: 'figma',
      name: 'Figma',
      icon: <FigmaIcon />,
    },
    {
      id: 'github',
      name: 'Github',
      icon: <GithubIcon />,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <InstagramIcon />,
    },
    {
      id: 'linkedin',
      name: 'Linkedin',
      icon: <LinkedinIcon />,
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      icon: <PinterestIcon />,
    },
    {
      id: 'reddit',
      name: 'Reddit',
      icon: <RedditIcon />,
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: <TelegramIcon />,
    },
    {
      id: 'tiktok',
      name: 'Tiktok',
      icon: <TiktokIcon />,
    },
    {
      id: 'twitter',
      name: 'Twitter | X',
      icon: <TwitterIcon />,
    },
    {
      id: 'whatsapp',
      name: 'Whatsapp',
      icon: <WhatsAppIcon />,
    },
    {
      id: 'youtube',
      name: 'Youtube',
      icon: <YoutubeIcon />,
    },
    {
      id: 'profile',
      name: 'Portifolio',
      icon: <ProfileIcon />,
    },
  ]

  return icons.find(icon => icon.id === id)?.icon || <></>
}
