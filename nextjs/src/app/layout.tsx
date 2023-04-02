'use client';

import '../styles/globals.css';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store/store';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Matheus Camargo Dev</title>
        <link rel="icon" type="image/svg+xml" href="/PriceHouse.ico" />
      </head>
      <body className="bg-green-800">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
