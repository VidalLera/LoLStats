import { Header } from 'components/header/header'
import { ReactNode } from 'react'
import Head from './head'
import './globals.css'

type props = {
  children: ReactNode
}

export default function RootLayout ({ children }: props) {
  return (
    <html>
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
