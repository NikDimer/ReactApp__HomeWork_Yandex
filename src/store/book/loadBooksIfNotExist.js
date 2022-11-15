import { categorySlice, bookSlice } from "./index";
import { prepareData } from "../utils";
import { selectCinemas } from "./selectors";

export const loadBooksIfNotExist = (categoryId) => (dispatch, getState) => {
  // if (selectCinemas(getState())?.length > 0) {
  //   return;
  // }

  dispatch(bookSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/books?categoryId=${categoryId}`)
    .then((response) => response.json())
    .then((categories) => {
      dispatch(bookSlice.actions.successLoading(prepareData(categories)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
