import {BookInfoBlock} from "../../components/BookInfoBlock/BookInfoBlock";
import {Reviews} from "../../components/Reviews/Reviews";
import {useState} from "react";

export const BookPage = ({book}) => {
    
    return <main>
        <BookInfoBlock book={book}/>
        <Reviews reviews={book.reviews}/>
    </main>
}