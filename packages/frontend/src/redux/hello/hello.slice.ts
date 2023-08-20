import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HELLO, HelloStateType } from './hello.types';

const helloInitialState: HelloStateType = {
  data: {
    message: 'empty!',
  },
};

export const helloSlice = createSlice({
  name: HELLO,
  initialState: helloInitialState,
  reducers: {
    getHelloAction: (state: HelloStateType) => {
      state.data.message = 'loading ...';
    },

    getHelloActionSuccess: (state: HelloStateType, { payload: message }: PayloadAction<string>) => {
      state.data = { message };
    },
  },
});

export const {
  getHelloAction,
  getHelloActionSuccess,
} = helloSlice.actions;

export default helloSlice.reducer;