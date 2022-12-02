import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./category";
import { bookSlice } from "./book";
import { cartSlice } from "./cart";
import { reviewsSlice } from "./reviews";
import { usersSlice } from "./users";
import { bookForBookPageSlice } from "./bookForBookPage";

export const store = configureStore({
  reducer: combineReducers({
    category: categorySlice.reducer,
    book: bookSlice.reducer,
    reviews: reviewsSlice.reducer,
    cart: cartSlice.reducer,
    users: usersSlice.reducer,
    bookForBookPage: bookForBookPageSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

console.log(store.getState());
