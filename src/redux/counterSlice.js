import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value--;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export default counterSlice.reducer;
export const { increment, incrementByAmount, decrement, decrementByAmount, reset } =
  counterSlice.actions;
