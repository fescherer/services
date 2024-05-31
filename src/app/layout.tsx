import type { Metadata } from 'next'
import './globals.css'
import { ProgressBarProvider } from '@/providers/progress-bar.provider'
import { ReactNode } from 'react'
import { Footer } from '@/components/footer'
import { montserrat } from './ui'
import { metadataConfig } from '@/utils/metadata'

export const metadata: Metadata = metadataConfig

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>

      <body className={`${montserrat.className} flex size-full min-h-screen flex-col bg-primary text-base text-primary-label-primary`}>
        <ProgressBarProvider>
          <main className="flex-1">{children}</main>
          <Footer />
        </ProgressBarProvider>
      </body>
    </html>
  )
}
