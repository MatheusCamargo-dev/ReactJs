import { QueryClientProvider } from '@tanstack/react-query'
import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'
import { queryClient } from '../lib/react-query'
import { DefaultSeo } from 'next-seo'

globalStyles()

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://ignite-call.rocketseat.com.br',
            siteName: 'Ignite Call',
          }}
        />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
