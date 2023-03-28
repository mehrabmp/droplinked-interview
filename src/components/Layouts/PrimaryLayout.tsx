import { NextSeo } from 'next-seo';
import { Header } from '@/components';

interface PrimaryLayoutProps extends React.PropsWithChildren {
  title?: string;
  description?: string;
}

export const PrimaryLayout = ({
  title = 'Droplinked',
  description = 'Droplinked description',
  children,
}: PrimaryLayoutProps) => {
  return (
    <>
      <NextSeo title={title} description={description} />
      <Header />
      {children}
    </>
  );
};
