import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '@/pages/_app';
import { PrimaryLayout, ProductList } from '@/components';

const Home: NextPageWithLayout = () => {
  return (
    <div className="mx-auto h-full p-4 xl:container">
      <h1 className="mt-20 mb-10 text-center text-xl font-bold text-primary">
        Hungry Artist Holders Store
      </h1>
      <ProductList />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout title="Droplinked">{page}</PrimaryLayout>;
};

export default Home;
