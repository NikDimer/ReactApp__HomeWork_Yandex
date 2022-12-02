export const selectUsersModule = (state) => state.reviews;

export const selectUsers = (state) =>
  Object.values(selectUsersModule(state).entities);

export const selectUserById = (state, userId) =>
  selectUsersModule(state).entities[userId];

/*export const selectBooksReviewsIds = (state, reviewId) => {
  // Делаем проверку на полную загрузку данных, если загрузка состоялась, то обращаемся к store
  if (state.reviews.status !== 'success') {
    return;
  }
  return selectReviewsModule(state).entities[reviewId].books
}*/
  
