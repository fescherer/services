import { DATA, METADATA } from '@/app.config'
import { Metadata } from 'next'

export const metadataConfig: Metadata = {
  title: DATA.appName,
  description: DATA.company_bio,
  metadataBase: new URL(METADATA.canonical_url),

  verification: {
    google: 'google',
    yandex: 'fe8b4fba9e9ba684',
    yahoo: 'yahoo',
    other: {
      me: ['felipescherer25@gmail.com'],
    },
  },

  openGraph: {
    title: DATA.appName,
    description: DATA.company_bio,
    url: METADATA.canonical_url,
    siteName: METADATA.canonical_url,
    images: [METADATA.thumb.url],
    locale: 'en',
    type: 'website',
  },

  authors: [{ name: 'Felipe Scherer', url: 'https://github.com/fescherer.com' }],

  twitter: {
    card: 'app',
    title: DATA.appName,
    description: DATA.company_bio,
    siteId: '1467726470533754880',
    creator: '@fescherer',
    creatorId: '1467726470533754880',
    images: METADATA.thumb.url,
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay',
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url',
      },
    },
  },

  generator: 'Next.js',

  alternates: {
    canonical: METADATA.canonical_url,
    languages: {
      'en-US': METADATA.canonical_url,
    },
  },

  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: '#359967' },
  //   { media: '(prefers-color-scheme: dark)', color: '#51C28A' },
  // ],

  icons: {
    icon: '/favicon.svg',
    shortcut:
      '/favicon.svg',
    apple:
      '/favicon.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.svg',
    },
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: DATA.appName,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
}
