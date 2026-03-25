import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { darkMode: false },
  reducers: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
    }
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] as Array<{ id: string; qty: number }> },
  reducers: {
    addToCart(state, action: PayloadAction<{ id: string }>) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) existing.qty += 1;
      else state.items.push({ id: action.payload.id, qty: 1 });
    }
  }
});

export const { toggleTheme } = uiSlice.actions;
export const { addToCart } = cartSlice.actions;

export const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer }
});

export type RootState = ReturnType<typeof store.getState>;
