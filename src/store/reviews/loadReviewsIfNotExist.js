import { reviewsSlice } from "./index";
import { prepareData } from "../utils";
import { selectReviews } from "./selectors";

export const loadReviewsIfNotExist = (dispatch, getState) => {
  if (selectReviews(getState())?.length > 0) {
    return;
  }

  dispatch(reviewsSlice.actions.startLoading());

  fetch("http://localhost:3001/api/reviews")
    .then((response) => response.json())
    .then((reviews) => {
      dispatch(reviewsSlice.actions.successLoading(prepareData(reviews)));
    })
    .catch(() => {
      dispatch(reviewsSlice.actions.failLoading());
    });
};
