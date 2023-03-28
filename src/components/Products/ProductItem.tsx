import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui';
import { Product } from '@/types';

interface ProductItemProps {
  product: Product;
}

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent`;

export const ProductSkeleton = () => {
  return (
    <div className="space-y-4 rounded-lg bg-white/5 p-4">
      <div className={`h-[200px] rounded-lg bg-rose-100/10 ${shimmer}`}></div>
      <div className="space-y-4">
        <div className={`h-3 w-3/5 rounded-lg bg-rose-100/10 ${shimmer}`}></div>
        <div className={`h-3 w-4/5 rounded-lg bg-rose-100/20 ${shimmer}`}></div>
        <div className={`h-3 w-2/5 rounded-lg bg-rose-100/20 ${shimmer}`}></div>
      </div>
    </div>
  );
};

export const ProductItem = ({ product }: ProductItemProps) => {
  const { images, title, variants } = product.shopifyData;

  return (
    <li>
      <Link href={`/products/${product._id}`}>
        <Card className="h-full font-normal">
          <Image
            src={images[0].src}
            alt={title}
            width={200}
            height={200}
            className="w-full rounded-lg"
          />
          <div className="flex h-[100px] flex-col justify-between space-y-4 pt-4">
            <h2>{title}</h2>
            <h3 className="text-right text-neutral-300">
              {variants[0].formatted_price}
            </h3>
          </div>
        </Card>
      </Link>
    </li>
  );
};
