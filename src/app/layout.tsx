import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from '../components/header'
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'StepbyStep Blog',
    description: 'Generated by create next app',
}
export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimuxScale: 1,
    userScalable: 0,
  }
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

        <body className={`${inter.className} bg-[#f6f6fa] dark:bg-[#18191A]`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header/>
        {children}
        <Footer/><Toaster />
        </ThemeProvider>
        </body>
        </html>
    )
}
