import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./category";
import { bookSlice } from "./book";
import { cartSlice } from "./cart";
import { bookForBookPageSlice } from "./bookForBookPage";

export const store = configureStore({
  reducer: combineReducers({
    category: categorySlice.reducer,
    book: bookSlice.reducer,
    cart: cartSlice.reducer,
    bookForBookPage: bookForBookPageSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

console.log(store.getState());
