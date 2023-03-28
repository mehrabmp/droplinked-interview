import { useMemo } from 'react';
import { useGetProductsQuery } from '@/services/product';
import { ProductItem, ProductSkeleton } from './ProductItem';

interface Props {
  searchTerm: string;
}

export const ProductList = ({ searchTerm }: Props) => {
  const { data, error, isLoading } = useGetProductsQuery();

  const filteredProducts = useMemo(() => {
    if (!data) return [];

    return data.data[0].products.filter(product =>
      product.shopifyData.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {error && <div>Error</div>}
      {isLoading &&
        Array(18)
          .fill('')
          .map((_, index) => <ProductSkeleton key={index} />)}
      {filteredProducts &&
        filteredProducts.map(product => (
          <ProductItem key={product._id} product={product} />
        ))}
    </ul>
  );
};
