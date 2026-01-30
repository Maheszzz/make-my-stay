import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'MakeMyStay.ai - Revenue Engine for Rental Businesses',
    description: 'AI-Powered Revenue Engine for Rental & Co-Living Businesses. 4x Conversions, 41% Lower CAC.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-white font-inter text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
                {children}
            </body>
        </html>
    )
}
