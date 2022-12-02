export const selectReviewsModule = (state) => state.reviews;

export const selectReviews = (state) => {
  console.log(selectReviewsModule(state));
  Object.values(selectReviewsModule(state).entities);}

export const selectReviewById = (state, reviewId) =>
  selectReviewsModule(state).entities[reviewId];

/*export const selectBooksReviewsIds = (state, reviewId) => {
  // Делаем проверку на полную загрузку данных, если загрузка состоялась, то обращаемся к store
  if (state.reviews.status !== 'success') {
    return;
  }
  return selectReviewsModule(state).entities[reviewId].books
}*/
  
