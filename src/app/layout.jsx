import './globals.css'
import NavbarWithCTAButton from '@/components/NavbarWithCTAButton';
import CustomFooter from '@/components/CustomFooter';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TYS Consultant',
  description: 'TYS Consulting, Business Consultant',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarWithCTAButton height={50} />
        {children}
        <CustomFooter />
      </body>
    </html>
  )
}
