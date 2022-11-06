import {useState} from "react";
import classnames from 'classnames';

import styles from './styles.module.css';

export const Book = ({book}) => {
    const [counter, setCounter] = useState(0);

    return <div className={classnames(styles.book)}>
        <div className={classnames(styles.bookInfoPart)}>
            <h3 className={classnames(styles.bookTitle)}>{book.name}</h3>
            <p className={classnames(styles.bookInfo)}>{book.authors}</p>
            <p className={classnames(styles.bookInfo)}>{book.genre}</p>
            <p className={classnames(styles.bookInfo)}>Оценка: {book.rating}</p>
            <p className={classnames(styles.bookPrice)}>{book.price} ₽</p>
        </div>
        
    </div>
    }