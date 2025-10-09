import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AutomateX - Agentes de IA que vendem 24/7',
  description: 'AutomateX não vende atendimento, vende crescimento. Agentes de IA e automações acessíveis que aumentam seu faturamento, reduzem custos e fazem seu negócio escalar.',
  keywords: 'IA, inteligência artificial, automação, vendas, chatbot, agentes, crescimento, faturamento',
  authors: [{ name: 'AutomateX' }],
  creator: 'AutomateX',
  publisher: 'AutomateX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://automatex.com.br',
    title: 'AutomateX - Agentes de IA que vendem 24/7',
    description: 'AutomateX não vende atendimento, vende crescimento. Agentes de IA e automações acessíveis que aumentam seu faturamento.',
    siteName: 'AutomateX',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AutomateX - Agentes de IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutomateX - Agentes de IA que vendem 24/7',
    description: 'AutomateX não vende atendimento, vende crescimento. Agentes de IA e automações acessíveis.',
    creator: '@automatex',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}