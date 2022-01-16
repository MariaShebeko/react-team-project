import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';

console.log('formReducer', formReducer);

const store = configureStore({
  reducer: formReducer,
});

export default store;
