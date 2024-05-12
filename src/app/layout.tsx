import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@mui/material"
import theme from "@/theme"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
    title: "Legit Health User List",
    description: "It's legit and also healthy!"
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className="layoutBody">
                <ThemeProvider theme={theme}>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
