
import type { Metadata } from 'next'
import { Lato, Poppins } from 'next/font/google'
import './globals.css'

const lato = Lato({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap'
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'LawnCare - Professional Lawn Care Services',
  description: 'Professional lawn care and maintenance services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body className={`${lato.variable} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
