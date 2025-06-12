// pages/_app.tsx
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import '../app/globals.css';
import React, { ReactElement, ReactNode } from 'react';

// Support for per-page layout
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
