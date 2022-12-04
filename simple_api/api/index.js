const router = require("express").Router();
const { categories, books, reviews, users } = require("./mock");
const { reply, getById } = require("./utils");

router.get("/categories", (req, res, next) => {
  reply(res, categories);
});

router.get("/books", (req, res, next) => {
  const { categoryId, bookId } = req.query;
  let result = books;

  if (categoryId) {
    const category = getById(categories)(categoryId);
    if (category) {
      result = category.books.map(getById(result));
    }
  }

  if (!categoryId && bookId) {
    result = getById(result)(bookId);
  }
  reply(res, result);
});

module.exports = router;
