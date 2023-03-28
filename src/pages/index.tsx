import { ReactElement, useState } from 'react';
import type { NextPageWithLayout } from '@/pages/_app';
import { PrimaryLayout, ProductList, Search } from '@/components';

const Home: NextPageWithLayout = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="mx-auto h-full space-y-10 p-4 xl:container">
      <h1 className="mt-20 mb-10 text-center text-xl font-bold text-primary">
        Hungry Artist Holders Store
      </h1>
      <div className="w-full sm:flex sm:justify-end">
        <Search onSearch={setSearchTerm} />
      </div>
      <ProductList searchTerm={searchTerm} />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Droplinked | Products',
        description: 'Products of Droplinked website',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default Home;
