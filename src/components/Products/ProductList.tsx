import { useGetProductsQuery } from '@/services/product';
import { ProductItem, ProductSkeleton } from './ProductItem';

export const ProductList = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {error && <div>Error</div>}
      {isLoading &&
        Array(18)
          .fill('')
          .map((_, index) => <ProductSkeleton key={index} />)}
      {data &&
        data.data[0].products.map(product => (
          <ProductItem key={product._id} product={product} />
        ))}
    </ul>
  );
};
