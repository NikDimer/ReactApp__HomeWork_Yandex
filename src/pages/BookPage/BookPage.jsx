import {BookInfoBlock} from "../../components/BookInfoBlock/BookInfoBlock";
import {Reviews} from "../../components/Reviews/Reviews";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectBooksForBookPage } from "../../store/bookForBookPage/selectors";
import { loadBooksForBookPageIfNotExist } from "../../store/bookForBookPage/loadBooksForBookPageIfNotExist";


export const BookPage = () => {
    //let { bookId } = useParams();
    const books = useSelector((state) => selectBooksForBookPage(state));

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('USEEFF');
        dispatch(loadBooksForBookPageIfNotExist());
    }, [dispatch]);


    let book = books[0];
    console.log(book, 'booklogtry')
    
    return <main>
        <BookInfoBlock book={book}/>
        <Reviews/>
    </main>
}