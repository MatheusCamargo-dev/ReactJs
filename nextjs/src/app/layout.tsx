

import { Provider } from 'react-redux';
import '../styles/globals.css'
import { ReactNode } from 'react';
import { store } from '@/store/store';

export default function RootLayout({ children }: { children: ReactNode}) {

  return (
    <html lang="en">
      <head>
        <title>Matheus Camargo Dev</title>
        <link rel="icon" type="image/svg+xml" href="/PriceHouse.ico" />
      </head>
      <body className='bg-zinc-900'>
        <Provider store={store}>
          {children}
        </Provider>
        <footer>
        </footer>
      </body>

    </html>
  )
}
