import classnames from 'classnames';
<<<<<<< Updated upstream

import styles from './styles.module.css';

export const CategoryMenu = (props) => {
    return <nav className={classnames(styles.mainNavigation)}>
                {
                    props.booksShop.map((category) => <button className={classnames(styles.mainNavigationItem, {[styles.activeCategory]:category.id === props.actCategory.id})} key={category.id} onClick={() => props.setCategory(category)}>{category.name}</button>)
                }
      </nav>
    }
=======
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/category/selectors';

import styles from './styles.module.css';

export const CategoryMenu = ({ setActiveCategory, activeCategory }) => {
  const categories = useSelector((state) => selectCategories(state));

  return (
    <ul className={classnames(styles.mainNavigation)}>
      {categories.length > 0 &&
        categories.map((category) => (
          <li
            className={classnames(
              styles.mainNavigationItem, `${category.id === activeCategory && styles.activeCategory}`
            )}
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </li>
        ))}
    </ul>
  );
};
>>>>>>> Stashed changes
