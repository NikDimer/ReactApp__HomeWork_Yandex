import {useState} from "react";
import classnames from 'classnames';

import styles from './styles.module.css';

export const Film = ({film, className}) => {
    const [count, setCount] = useState(0);

    return <div className={classnames(styles.root, className)}>
        <div>{film.name}</div>
        {film.price !== undefined ? <div>{film.price}р</div> : <div>Нет билетов</div>}
        <div>
            <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
            {count}
            <button onClick={() => setCount(count + 1)} disabled={count === 6}>+</button>
        </div>
    </div>
}