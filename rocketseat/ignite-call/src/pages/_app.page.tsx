import { QueryClientProvider } from '@tanstack/react-query'
import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'
import { queryClient } from '../lib/react-query'

globalStyles()

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
