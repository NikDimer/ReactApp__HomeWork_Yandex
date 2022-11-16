import {useState} from "react";
import classnames from 'classnames';
import {Book} from "../../components/Book/Book";

import styles from './styles.module.css';

<<<<<<< Updated upstream
export const CategoryBooksList = ({category}) => {

    return <ul className={classnames(styles.booksList)}>
        {
            category.books.map((book) => <li key={book.id}><Book book={book} info={false}/></li>)
=======
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
            bookIds.map((id) => <li key={id}><Book key={id} bookId={id} info={false}/></li>)
>>>>>>> Stashed changes
        }
      </ul>
    }