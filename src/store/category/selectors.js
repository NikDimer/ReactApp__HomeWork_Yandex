export const selectCategoryModule = (state) => state.category;

export const selectCategories = (state) =>
  Object.values(selectCategoryModule(state).entities);

export const selectCategoryById = (state, categoryId) =>
  selectCategoryModule(state).entities[categoryId];

export const selectCategoriesBookIds = (state, categoryId) => {
  // Делаем проверку на полную загрузку данных, если загрузка состоялась, то обращаемся к store
  if (state.category.status !== 'success') {
    return;
  }
  return selectCategoryModule(state).entities[categoryId].books
}
  
