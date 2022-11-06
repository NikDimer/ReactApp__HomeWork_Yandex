import {useState} from "react";
import classnames from 'classnames';

import styles from './styles.module.css';

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
    </div>
    }