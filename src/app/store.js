import { configureStore } from '@reduxjs/toolkit';
import { menuReducer } from '../components/Menu/menuSlice'

export const store = configureStore({
  reducer: {
    menu: menuReducer
  },
});
