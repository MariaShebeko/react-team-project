import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const formSlice = createSlice({
  name: 'orderForm',
  initialState,
  reducers: {
    add: {
      reducer: (state, { payload }) => {
        console.log('payload', payload);
        console.log('initialState', initialState);

        return [...state, payload];
      },
      prepare: ({ id, name, email, number, tariff }) => {
        return { payload: { id, name, email, number, tariff } };
      },
    },
  },
});

export const { add } = formSlice.actions;
export default formSlice.reducer;
