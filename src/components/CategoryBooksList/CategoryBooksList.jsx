import {useState} from "react";
import classnames from 'classnames';
import {Book} from "../../components/Book/Book";

import styles from './styles.module.css';

export const CategoryBooksList = ({category}) => {

    return <ul className={classnames(styles.booksList)}>
        {
            category.books.map((book) => <li key={book.id}><Book book={book}/></li>)
        }
      </ul>
    }