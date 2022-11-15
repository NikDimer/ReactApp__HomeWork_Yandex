import {useState} from "react";
import classnames from 'classnames';

import styles from './styles.module.css';

import { useDispatch, useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";
import { selectBookCount } from "../../store/cart/selectors";
import { cartSlice } from "../../store/cart";

export const Book = ({bookId, info}) => {
    const dispatch = useDispatch();
    const book = useSelector((state) => selectBookById(state, bookId));
    const count = useSelector((state) => selectBookCount(state, bookId));

    if (!book) {
        return null;
    }

    return <div className={classnames(styles.book, {[styles.BookPageBook]: info})}  key={book.id}>
        <div className={classnames(styles.bookInfoPart)}>
            <h3 className={classnames(styles.bookTitle)}>{book.name}</h3>
            <p className={classnames(styles.bookInfo)}>{book.authors}</p>
            <p className={classnames(styles.bookInfo)}>{book.genre}</p>
            <p className={classnames(styles.bookInfo)}>Оценка: {book.rating}</p>
            <p className={classnames(styles.bookPrice)}>
            {book.price !== undefined ? (
                <div>{book.price}<span className={classnames(styles.roubleFont)}>₽</span></div>
            ) : (
                <div>Нет в наличии</div>
            )}
            </p>
        </div>
        
        <div className={classnames(styles.counterGroup)}>
            <button className={classnames(styles.minusButton)} onClick={() => dispatch(cartSlice.actions.removeBook(bookId))}
          disabled={count === 0}></button>
            <p className={classnames(styles.counter)}>{count || 0}</p>
            <button className={classnames(styles.plusButton)} onClick={() => dispatch(cartSlice.actions.addBook(bookId))}></button>
        </div>
    </div>
    }