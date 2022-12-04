import { categorySlice, bookForBookPageSlice } from "./index";
import { prepareData } from "../utils";
import { selectCinemas } from "../book/selectors";

export const loadBooksForBookPageIfNotExist = () => (dispatch, getState) => {
  // if (selectCinemas(getState())?.length > 0) {
  //   return;
  // }


  dispatch(bookForBookPageSlice.actions.startLoading());

  fetch(`http://localhost:3001/api/books`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res, '!!!')
      dispatch(bookForBookPageSlice.actions.successLoading(prepareData(res)));
    })
    .catch(() => {
      dispatch(bookForBookPageSlice.actions.failLoading());
    });
};