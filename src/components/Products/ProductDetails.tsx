import Image from 'next/image';
import { useState } from 'react';
import { Card } from '@/components/ui';
import { Product } from '@/types';
import { ProductGallery } from './ProductGallery';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { images, title, body_html } = product.shopifyData;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () =>
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  const handleNextImage = () =>
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

  return (
    <Card className="mx-auto max-w-[1200px] md:p-10">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-[0.8]">
          <Image
            src={images[currentImageIndex].src}
            alt={title}
            width={400}
            height={400}
            className="w-full rounded-lg"
          />
          <div className="my-4">
            <ProductGallery
              images={images}
              onNextImage={handleNextImage}
              onPreviousImage={handlePreviousImage}
              currentImageIndex={currentImageIndex}
              onCurrentImageIndexChange={setCurrentImageIndex}
            />
          </div>
        </div>
        <div className="flex-1 space-y-10 p-4 md:px-10 md:py-5">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="space-y-5 font-normal">
            <h2 className="text-lg">Description</h2>
            <h3
              className="text-neutral-300"
              dangerouslySetInnerHTML={{
                __html: body_html,
              }}
            ></h3>
          </div>
        </div>
      </div>
    </Card>
  );
};
