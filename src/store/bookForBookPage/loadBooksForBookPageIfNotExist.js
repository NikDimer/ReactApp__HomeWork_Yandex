import { categorySlice, bookForBookPageSlice } from "./index";
import { prepareData } from "../utils";
import { selectCinemas } from "../book/selectors";

export const loadBooksForBookPageIfNotExist = () => (dispatch, getState) => {
  // if (selectCinemas(getState())?.length > 0) {
  //   return;
  // }

  console.log('DispatchTest');
  /*dispatch(bookForBookPageSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/books`)
    .then((response) => response.json())
    .then((books) => {
      dispatch(bookForBookPageSlice.actions.successLoading(prepareData(books)));
    })
    .catch(() => {
      dispatch(bookForBookPageSlice.actions.failLoading());
    });*/
};