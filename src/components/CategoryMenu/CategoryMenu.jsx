import classnames from 'classnames';
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/category/selectors";

import styles from './styles.module.css';

export const CategoryMenu = () => {
    const categories = useSelector((state) => selectCategories(state));

    return <nav className={classnames(styles.mainNavigation)}>
                {
                categories.length > 0 &&
                categories.map((category) => (
                    <NavLink strict
                    to={category.id}
                    className={({ isActive }) =>
                        classnames({
                        [styles.activeCategory]: isActive,
                        })
                    }
                    key={category.id}
                    >
                    <p className={classnames(styles.mainNavigationItem)}>{category.name}</p>
                    </NavLink>
                ))}
      </nav>
    }