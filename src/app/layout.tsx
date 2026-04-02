import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import FloatingContact from '../components/FloatingContact'

export const metadata = {
  title: 'Xe ghép Minh Ngọc',
  description: 'Xe tiện chuyến Hà Nội – Nam Định',
}


export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        <Header />
        {children}
        <FloatingContact />
      </body>
    </html>
  )
}
