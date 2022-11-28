import classnames from 'classnames';
import { Link } from "react-router-dom";


import styles from './styles.module.css';

export const Header = () => {
    return <header className={classnames(styles.mainHeader)}>
        <Link to="/" className={styles.headerLink}><h1 className={styles.mainHeaderTitle}>Магазин</h1></Link>
        <Link to="/cart" className={styles.headerLink}><div className={styles.backetButton}></div></Link>
    </header>
}