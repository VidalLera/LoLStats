import { Header } from 'components/header/header'
import { ReactNode } from 'react'
import Head from './head'

type props = {
  children: ReactNode
}

export default function RootLayout ({ children }: props) {
  return (
    <html>
      <Head />
      <body>{children}</body>
    </html>
  )
}
