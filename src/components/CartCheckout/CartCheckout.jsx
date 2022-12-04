import classnames from 'classnames';

import styles from './styles.module.css';

export const CartCheckout = ({cart, books}) => {
  let booksForCart = {};

  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < books.length; j++) {
      if (cart[i].bookId === books[j].id) {
        booksForCart[cart[i].bookId] = books[j];
      }
    }
  }

  let finalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    finalPrice += booksForCart[cart[i].bookId].price * cart[i].count;
  }


  return (<div className={classnames(styles.CartListContainer)}>
      <div>
        <h2 className={classnames(styles.CartListTitle)}>{'Ваш заказ'}</h2>
        <ul className={classnames(styles.CartList)}>
          {cart.length > 0 &&
            cart.map((cartItem) => {
              if (cartItem.count > 0) {
              return(<li
                className={classnames(
                  styles.cartPriceItem
                )}
                key={cartItem.bookId}
              >
                <p className={classnames(styles.cartPriceItemName)}>{booksForCart[cartItem.bookId].name}</p>
                <p className={classnames(styles.cartPriceItemPrice)}>{booksForCart[cartItem.bookId].price*cartItem.count}<span className={classnames(styles.roubleFont)}>₽</span></p>
              </li>)}
              return null;
            })}
        </ul>
      </div>
      <div className={classnames(styles.CartListFinal)}>
        <div className={classnames(styles.CartListFinalPrice)}><p>Итого: {finalPrice}<span className={classnames(styles.roubleFont)}>₽</span></p></div>
        <button className={classnames(styles.CartListFinalBuyButton)}>Купить</button>
      </div>
    </div>
  );
};