import type { NextPageWithLayout } from '@/pages/_app';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { PrimaryLayout, ProductDetails } from '@/components';
import { useGetProductQuery } from '@/services/product';

const ProductPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { data, error, isLoading } = useGetProductQuery(
    router.query.id as string
  );

  return (
    <div className="mx-auto h-full space-y-10 p-4 xl:container">
      {error && <p>error</p>}
      {isLoading && <p>loading</p>}
      {data && <ProductDetails product={data.data} />}
    </div>
  );
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout seo={{ title: 'Droplinked | Product Page' }}>
      {page}
    </PrimaryLayout>
  );
};

export default ProductPage;
