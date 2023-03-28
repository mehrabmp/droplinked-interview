import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { cn } from '@/utils';
import '@splidejs/react-splide/css/default';

interface ProductGalleryProps {
  images: { src: string }[];
  currentImageIndex: number;
  onNextImage: () => void;
  onPreviousImage: () => void;
  onCurrentImageIndexChange: (index: number) => void;
}

export const ProductGallery = ({
  images,
  currentImageIndex,
  onCurrentImageIndexChange,
  onNextImage,
  onPreviousImage,
}: ProductGalleryProps) => {
  const ref = useRef<Splide>(null);

  useEffect(() => {
    ref.current?.go(currentImageIndex);
  }, [currentImageIndex]);

  return (
    <div className="flex">
      <button
        className="flex-[0.2] focus:outline-none"
        onClick={onPreviousImage}
      >
        <BsChevronLeft size="2.5rem" />
      </button>
      <Splide
        ref={ref}
        aria-label="Products Images"
        options={{
          perPage: 3,
          gap: '1rem',
          pagination: false,
          arrows: false,
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <Image
              src={image.src}
              alt={'asd'}
              width={100}
              height={100}
              className={cn(
                'h-full w-full rounded-lg border-2 border-transparent object-cover focus:outline-none',
                {
                  'border-2 border-primary': index === currentImageIndex,
                }
              )}
              onClick={() => onCurrentImageIndexChange(index)}
            />
          </SplideSlide>
        ))}
      </Splide>
      <button className="flex-[0.2] focus:outline-none" onClick={onNextImage}>
        <BsChevronRight size="2.5rem" />
      </button>
    </div>
  );
};
