import {BookInfoBlock} from "../../components/BookInfoBlock/BookInfoBlock";
import {Reviews} from "../../components/Reviews/Reviews";
import {useState} from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";


export const BookPage = () => {
    let { bookId } = useParams();

    const dispatch = useDispatch();

    const book = useSelector((state) => selectBookById(state, bookId));

    
    return <main>
        <BookInfoBlock book={book}/>
        <Reviews reviews={book.reviews}/>
    </main>
}