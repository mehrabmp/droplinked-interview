import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '@/pages/_app';
import { PrimaryLayout } from '@/components';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="font-bold"></h1>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout title="Droplinked">{page}</PrimaryLayout>;
};

export default Home;
