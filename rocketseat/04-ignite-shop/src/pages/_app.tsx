import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import Header from '../component/Header'
import { Container } from '../styles/pages/app'
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  )
}
