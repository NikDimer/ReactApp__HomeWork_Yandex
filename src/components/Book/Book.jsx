import { useState } from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectBookById } from '../../store/book/selectors';
import { selectBookCount } from '../../store/cart/selectors';
import { cartSlice } from '../../store/cart';

import { Link } from "react-router-dom";

export const Book = ({ bookId, info, bookCart }) => {
  const dispatch = useDispatch();
  let book = useSelector((state) => selectBookById(state, bookId));
  let count = useSelector((state) => selectBookCount(state, bookId));

  console.log(bookId, book, count)
  if (bookCart != false) {
    book = bookCart;
  }

  if (!book) {
    return null;
  }

  return (
    
      <div
      className={classnames(styles.book, { [styles.BookPageBook]: info })}
      key={book.id}
    >
      <Link className={classnames(styles.bookLink)} to={'books/' + book.id} key={book.id}>
      <div className={classnames(styles.bookInfoPart)}>
        <h3 className={classnames(styles.bookTitle)}>{book.name}</h3>
        <p className={classnames(styles.bookInfo)}>{book.authors}</p>
        <p className={classnames(styles.bookInfo)}>{book.genre}</p>
        <p className={classnames(styles.bookInfo)}>Оценка: {book.rating}</p>
        <div className={classnames(styles.bookPrice)}>
          {book.price !== undefined ? (
            <p>
              {book.price}
              <span className={classnames(styles.roubleFont)}>₽</span>
            </p>
          ) : (
            <p>Нет в наличии</p>
          )}
        </div>
      </div>
      </Link>

      <div className={classnames(styles.counterGroup)}>
        <button
          className={classnames(styles.minusButton)}
          onClick={() => dispatch(cartSlice.actions.removeBook(bookId))}
          disabled={count === 0}
        ></button>
        <p className={classnames(styles.counter)}>{count || 0}</p>
        <button
          className={classnames(styles.plusButton)}
          onClick={() => dispatch(cartSlice.actions.addBook(bookId))}
        ></button>
      </div>
    </div>
  );
};
