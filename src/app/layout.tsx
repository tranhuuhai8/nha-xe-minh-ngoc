import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Nhà xe Minh Ngọc',
  description: 'Xe tiện chuyến Hà Nội – Nam Định',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
