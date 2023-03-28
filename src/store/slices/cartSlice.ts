import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { Product, Variant } from '@/types';

interface CartState {
  items: {
    product: Product;
    variant: Variant;
  }[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; variant: Variant }>
    ) => {
      state.items.push({
        product: action.payload.product,
        variant: action.payload.variant,
      });
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(
        item => item.variant.id !== action.payload.id
      );
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.length;

export default cartSlice.reducer;
