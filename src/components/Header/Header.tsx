import Link from 'next/link';
import { CartButton } from '@/components';

export const Header = () => {
  return (
    <header className="border-b border-solid border-neutral-700">
      <nav className="flex items-center justify-between py-5 px-7">
        <Link href="/" className="text-2xl font-bold text-primary ">
          droplinked
        </Link>
        <CartButton />
      </nav>
    </header>
  );
};
