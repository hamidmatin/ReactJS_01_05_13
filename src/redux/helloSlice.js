import { createSlice } from '@reduxjs/toolkit';

export const helloSlice = createSlice({
  name: 'hello',
  initialState: {
    message: 'Hello Redux',
  },
  reducers: {
    changeMessage: (state, action) => {
      console.log('state', state);
      console.log('action', action);
      state.message = 'Message Changed';
    },
    addMessageByPayload: (state, action) => {
      console.log('state', state);
      console.log('action', action);

      state.message += action.payload;
    },
    changeMessageByPayload: (state, action) => {
      state.message = action.payload;
    },
  },
});

export default helloSlice.reducer;
export const { changeMessage, addMessageByPayload, changeMessageByPayload } = helloSlice.actions;
