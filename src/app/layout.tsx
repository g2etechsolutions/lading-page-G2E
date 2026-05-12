import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/atoms/ThemeProvider'
import './globals.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'G2E Tech Solutions — Transformamos negócios com dados, estratégia e tecnologia',
  description: 'Inovação, inteligência de dados e automação estratégica para empresas que constroem o futuro com escalabilidade real.',
  icons: {
    icon: `${basePath}/logo.png`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-background text-on-background font-body antialiased min-h-screen" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
