import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interest Match - Find Love Through Shared Passions',
  description: 'Dating app that connects people based on genuine compatibility and shared interests, not just looks. Join the waitlist for early access.',
  keywords: 'dating app, compatibility, shared interests, meaningful connections',
  openGraph: {
    title: 'Interest Match - Find Love Through Shared Passions',
    description: 'Dating app that connects people based on genuine compatibility and shared interests.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
