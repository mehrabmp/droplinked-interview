import { BsCart } from 'react-icons/bs';

export const CartButton = () => {
  return (
    <div className="relative cursor-pointer dark:text-neutral-200">
      <BsCart size="2.25rem" />
      <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-t-full rounded-l-full bg-primary text-sm font-medium text-black">
        2
      </span>
    </div>
  );
};
