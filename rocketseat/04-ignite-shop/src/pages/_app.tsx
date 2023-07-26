import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import Header from "../component/Header";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}


