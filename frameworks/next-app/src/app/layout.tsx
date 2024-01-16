import type { Metadata } from 'next'
import '@/app/globals.css'

export const metadata: Metadata = {
    title: 'NextJS App',
    description: 'First NextJS App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
