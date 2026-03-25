import { configureStore, createSlice } from '@reduxjs/toolkit';

const dashboard = createSlice({
  name: 'dashboard',
  initialState: { totalSales: 0, totalUsers: 0, totalOrders: 0 },
  reducers: {
    setAnalytics: (state, action) => ({ ...state, ...action.payload })
  }
});

export const { setAnalytics } = dashboard.actions;
export const store = configureStore({ reducer: { dashboard: dashboard.reducer } });
