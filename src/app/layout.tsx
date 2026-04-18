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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17947525990"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17947525990');
            `,
          }}
        />
      </head>

      <body>
        <Header />
        {children}
        <FloatingContact />
      </body>
    </html>
  )
}