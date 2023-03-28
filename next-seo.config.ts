import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'Droplinked',
  description:
    'Droplinked is a platform for creators to sell their digital products and services.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.url.ie/',
    siteName: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;
