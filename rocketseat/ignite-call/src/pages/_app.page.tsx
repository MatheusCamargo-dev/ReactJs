import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'

globalStyles()

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
