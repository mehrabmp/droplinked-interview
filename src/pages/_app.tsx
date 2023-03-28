import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { persistor, store } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className={`${inter.variable} font-sans`}>
          <DefaultSeo {...SEO} />
          {getLayout(<Component {...pageProps} />)}
        </main>
      </PersistGate>
    </Provider>
  );
}
