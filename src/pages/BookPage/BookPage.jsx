import {BookInfoBlock} from "../../components/BookInfoBlock/BookInfoBlock";
import {Reviews} from "../../components/Reviews/Reviews";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectBooksForBookPage } from "../../store/bookForBookPage/selectors";
import { selectIsBooksForBookPageLoading } from "../../store/bookForBookPage/selectors";
import { loadBooksForBookPageIfNotExist } from "../../store/bookForBookPage/loadBooksForBookPageIfNotExist";


export const BookPage = () => {
    let { bookId } = useParams();
    const books = useSelector((state) => selectBooksForBookPage(state));
    let isLoading = useSelector((state) => selectIsBooksForBookPageLoading(state));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBooksForBookPageIfNotExist());
    }, []);


    let book = books[0];
    for (let i = 0; i < books.length; i++) {
        if (books[i].id == bookId) {
            book = books[i];
            break;
        }
    }
    console.log(book, 'booklogtry', isLoading)
    if (isLoading) {
        return <span>Loading...</span>
    }
    
    return <main>
            {book && <BookInfoBlock book={book}/>}
            {book && <Reviews reviews={book.reviews}/>}
    </main>
}