import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'G2E Tech Solutions — Transforme Seu Negócio com Tecnologia de Verdade',
  description: 'Soluções em Nuvem, E-commerce, Infraestrutura e Chatbots com IA sob medida para empresas que querem evoluir.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-background text-on-background font-body antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
