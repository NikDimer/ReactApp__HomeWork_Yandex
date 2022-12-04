import classnames from 'classnames';
import {Book} from "../../components/Book/Book";

import styles from './styles.module.css';

export const CartBookList = ({cart, books}) => {
  let booksForCart = {};

  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < books.length; j++) {
      if (cart[i].bookId === books[j].id) {
        booksForCart[cart[i].bookId] = books[j];
      }
    }
  }



  return (
  <div className={classnames(styles.CartBookList)}>
    {
      cart.map((cartItem) => {
        console.log('book');
        if (cartItem.count > 0) {
          return <Book key={cartItem.bookId} bookId={cartItem.bookId} info={false} bookCart={booksForCart[cartItem.bookId]}/>
        }
        return null;
      })
    }
  </div>)
};