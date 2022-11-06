import classnames from 'classnames';
import styles from './styles.module.css';

export const Review = ({review}) => {
  return <div className={classnames(styles.reviewBlock)}>
      <div className={classnames(styles.reviewInfo)}>
        <div className={classnames(styles.reviewUser)}>{review.user.name}</div>
        <div className={classnames(styles.reviewScore)}>Оценка: {review.score}</div>
      </div>
      <div className={classnames(styles.reviewText)}>{review.text}</div>
    </div>
}