import { Statuses } from "../../constants/statuses";

export const selectBookForBookPageModule = (state) => state.book;

export const selectBooksForBookPage = (state) =>
  Object.values(selectBookForBookPageModule(state).entities);

export const selectBookForBookPageById = (state, bookId) =>
  selectBookForBookPageModule(state).entities[bookId];

export const selectIsBooksForBookPageLoading = (state) =>
  selectBookForBookPageModule(state).status === Statuses.inProgress;
