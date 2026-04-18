import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import FloatingContact from '../components/FloatingContact'
import Script from 'next/script'

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
        {/* Google tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17947525990"
          strategy="afterInteractive"
        />
        <Script id="google-ads">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17947525990');
          `}
        </Script>
      </head>

      <body>
        <Header />
        {children}
        <FloatingContact />
      </body>
    </html>
  )
}