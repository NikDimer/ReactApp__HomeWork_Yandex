import classnames from 'classnames';
import styles from './styles.module.css';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { selectUserById } from "../../store/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersIfNotExist } from "../../store/users/loadUsersIfNotExist";

export const Review = ({review}) => {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsersIfNotExist);
    }, []);

  const user = useSelector((state) => selectUserById(state, review.userId));

  return <div className={classnames(styles.reviewBlock)}>
      <div className={classnames(styles.reviewInfo)}>
        <div className={classnames(styles.reviewUser)}>{user.name}</div>
        <div className={classnames(styles.reviewScore)}>Оценка: {review.score}</div>
      </div>
      <div className={classnames(styles.reviewText)}>{review.text}</div>
    </div>
}