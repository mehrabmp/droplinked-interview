import { Product, Variant } from '@/types';
import { Button } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectCartItems } from '@/store/slices/cartSlice';

interface ProductVariantsProps {
  product: Product;
  variants: Variant[];
}

export const ProductVariants = ({
  product,
  variants,
}: ProductVariantsProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);

  const handleAddToCart = (variant: Variant) =>
    dispatch({ type: 'cart/addToCart', payload: { product, variant } });

  const handleRemoveFromCart = (variant: Variant) =>
    dispatch({ type: 'cart/removeFromCart', payload: { id: variant.id } });

  return (
    <div className="my-10">
      <table className="w-full border-separate border-spacing-y-4 text-xs sm:text-base">
        <thead></thead>
        <tbody className="space-y-8 divide-y divide-neutral-700">
          {variants.map(variant => (
            <tr key={variant.id}>
              <td className="border-b border-solid border-neutral-700 p-2 pr-8">
                <div className="border-r border-solid border-neutral-700">
                  Weight: {variant.weight}
                </div>
              </td>
              <td className="border-b  border-solid border-neutral-700 p-2 pr-8">
                <div className="border-r border-solid border-neutral-700">
                  Weight unit: {variant.weight_unit}
                </div>
              </td>
              <td className="border-b border-solid border-neutral-700 p-2 pr-8">
                <div className="border-r border-solid border-neutral-700">
                  Grams: {variant.grams}
                </div>
              </td>
              <td className="border-b border-solid border-neutral-700 p-2">
                Price: {variant.formatted_price}
              </td>
              <td className="border-b border-solid border-neutral-700 p-2">
                <div className="flex w-full justify-end">
                  {cartItems.find(item => item.variant.id === variant.id) ? (
                    <Button
                      className="mr-4"
                      variant="secondary"
                      onClick={() => handleRemoveFromCart(variant)}
                    >
                      remove
                    </Button>
                  ) : (
                    <Button
                      className="mr-4"
                      onClick={() => handleAddToCart(variant)}
                    >
                      request
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
