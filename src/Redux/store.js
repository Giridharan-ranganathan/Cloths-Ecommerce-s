import { configureStore } from '@reduxjs/toolkit';
import cart from './Reducers/cart';

export default configureStore({
  reducer:{
    cart : cart
  },
})