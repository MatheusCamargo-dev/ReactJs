

import Header from '@/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode}) {

  return (
    <html lang="en">
      <head>
        <title>Matheus Camargo Dev</title>
        <link rel="icon" type="image/svg+xml" href="/PriceHouse.ico" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>
      </head>
      <body className='bg-dark'>
        <Header />
        {children}
        <footer>
        </footer>
      </body>

    </html>
  )
}
