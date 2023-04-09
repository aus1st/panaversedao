import './globals.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export const metadata = {
  title: 'Panaverse',
  description: 'Panaverse Dao',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
