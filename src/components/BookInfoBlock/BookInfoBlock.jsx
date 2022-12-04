import classnames from 'classnames';
import {Book} from "../../components/Book/Book";

import styles from './styles.module.css';

export const BookInfoBlock = ({book}) => {
    console.log(book);
    return <div className={classnames(styles.BookInfoBlock)}>
        <Book info={true} bookId={book.id} bookCart={false}/>
        <div className={classnames(styles.annotationBlock)}>
            <h2 className={classnames(styles.annotationBlockTitle)}>Аннотация</h2>
            <p className={classnames(styles.annotationBlockText)}>
                {book.description}
            </p>
        </div>
    </div>
}