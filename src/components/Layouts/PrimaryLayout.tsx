import { NextSeo, type NextSeoProps } from 'next-seo';
import { Header } from '@/components';

interface PrimaryLayoutProps extends React.PropsWithChildren {
  seo: NextSeoProps;
}

export const PrimaryLayout = ({ seo, children }: PrimaryLayoutProps) => {
  return (
    <>
      <NextSeo {...seo} />
      <Header />
      {children}
    </>
  );
};
