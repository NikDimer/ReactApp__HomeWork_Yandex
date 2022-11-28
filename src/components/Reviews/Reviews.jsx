import {Review} from "../Review/Review";

import classnames from 'classnames';
import styles from './styles.module.css';

export const Reviews = ({reviews}) => {
    return <ul className={classnames(styles.reviewsList)}>
            {
                reviews.map((review) => <li key={review.id}><Review review={review}/></li>)
            }
    </ul>
}