import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
