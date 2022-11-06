import classnames from 'classnames';

import styles from './styles.module.css';

export const CategoryMenu = (props) => {
    return <nav className={classnames(styles.mainNavigation)}>
            <h2 className={classnames(styles.mainNavigationTitle)}>Художественная литература</h2>
                {
                    props.booksShop.map((category) => <button className={classnames(styles.mainNavigationItem)} key={category.id} onClick={() => props.setCategory(category)}>{category.name}</button>)
                }
      </nav>
    }