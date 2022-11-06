import classnames from 'classnames';

import styles from './styles.module.css';

export const Header = () => {
    return <header className={classnames(styles.mainHeader)}>
        <h1 className={styles.mainHeaderTitle}>Магазин</h1>
        <div className={styles.backetButton}></div>
    </header>
}