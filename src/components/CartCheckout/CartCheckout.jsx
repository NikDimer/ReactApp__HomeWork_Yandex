import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { selectCartModule } from '../../store/cart/selectors';

import styles from './styles.module.css';

export const CartCheckout = ({cart}) => {

  return (<div className={classnames(styles.CartListContainer)}>
    <h2 className={classnames(styles.CartListTitle)}>{'Ваш заказ'}</h2>
    <ul className={classnames(styles.CartList)}>
      {cart.length > 0 &&
        cart.map((cartItem) => (
          <li
            className={classnames(
              styles.mainNavigationItem
            )}
            key={cartItem.id}
          >
            {cartItem.name}
          </li>
        ))}
    </ul>
    </div>
  );
};