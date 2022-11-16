import { useState } from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

<<<<<<< Updated upstream
export const Book = (props) => {
    const [counter, setCounter] = useState(0);

    return <div className={classnames(styles.book, {[styles.BookPageBook]: props.info})}  key={props.book.id}>
        <div className={classnames(styles.bookInfoPart)}>
            <h3 className={classnames(styles.bookTitle)}>{props.book.name}</h3>
            <p className={classnames(styles.bookInfo)}>{props.book.authors}</p>
            <p className={classnames(styles.bookInfo)}>{props.book.genre}</p>
            <p className={classnames(styles.bookInfo)}>Оценка: {props.book.rating}</p>
            <p className={classnames(styles.bookPrice)}>{props.book.price} <span className={classnames(styles.roubleFont)}>₽</span></p>
        </div>
        
        <div className={classnames(styles.counterGroup)}>
            <button className={classnames(styles.minusButton)} onClick={() => setCounter(counter - 1)} disabled={counter == 0}></button>
            <p className={classnames(styles.counter)}>{counter}</p>
            <button className={classnames(styles.plusButton)} onClick={() => setCounter(counter + 1)}></button>
        </div>
=======
import { useDispatch, useSelector } from 'react-redux';
import { selectBookById } from '../../store/book/selectors';
import { selectBookCount } from '../../store/cart/selectors';
import { cartSlice } from '../../store/cart';

export const Book = ({ bookId, info }) => {
  const dispatch = useDispatch();
  const book = useSelector((state) => selectBookById(state, bookId));
  const count = useSelector((state) => selectBookCount(state, bookId));

  if (!book) {
    return null;
  }

  return (
    <div
      className={classnames(styles.book, { [styles.BookPageBook]: info })}
      key={book.id}
    >
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
>>>>>>> Stashed changes
    </div>
  );
};
