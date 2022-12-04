import {Review} from "../Review/Review";

import classnames from 'classnames';
import styles from './styles.module.css';


export const Reviews = ({reviews}) => {
    console.log(reviews);

    return(<ul className={classnames(styles.reviewsList)}>
            {
                reviews.map((review) => {
                return <li key={review.id}><Review review={review} user={review.user}/></li>
                })
            }
    </ul>
    )
}