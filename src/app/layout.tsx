import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
export const metadata = {
  title: 'PKSE',
  description: 'Paguyuban Karya Salemba Empat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='cyberpunk'>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
