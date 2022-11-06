import classnames from 'classnames';

import styles from './styles.module.css';

export const CategoryMenu = (props) => {
    return <nav className={classnames(styles.mainNavigation)}>
                {
                    props.booksShop.map((category) => <button className={classnames(styles.mainNavigationItem, {[styles.activeCategory]:category.id === props.actCategory.id})} key={category.id} onClick={() => props.setCategory(category)}>{category.name}</button>)
                }
      </nav>
    }