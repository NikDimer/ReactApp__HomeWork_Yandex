import {useState} from "react";
import classnames from 'classnames';
import {Book} from "../../components/Book/Book";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooksIfNotExist } from "../../store/book/loadBooksIfNotExist";
import { selectBooks, selectIsBooksLoading } from "../../store/book/selectors";
import { selectCategoriesBookIds } from "../../store/category/selectors";

import styles from './styles.module.css';

export const CategoryBooksList = ({categoryId}) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadBooksIfNotExist(categoryId));
    }, [categoryId, dispatch]);

    const bookIds = useSelector((state) => selectCategoriesBookIds(state, categoryId));
    console.log(bookIds, 'id')
    const isLoading = useSelector((state) => selectIsBooksLoading(state));

    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (!bookIds) {
      return null;
    }

    return <ul className={classnames(styles.booksList)}>
        {
            bookIds.map((id) => <li key={id}><Book key={id} bookId={id} info={false} bookCart={false}/></li>)
        }
      </ul>
    }