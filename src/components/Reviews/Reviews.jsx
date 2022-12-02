import {Review} from "../Review/Review";

import classnames from 'classnames';
import styles from './styles.module.css';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { selectReviews } from "../../store/reviews/selectors";
import { useDispatch, useSelector } from "react-redux";
import { loadReviewsIfNotExist } from "../../store/reviews/loadReviewsIfNotExist";


export const Reviews = ({reviewsIds}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadReviewsIfNotExist);
    }, []);

    const reviews = useSelector((state) => selectReviews(state));

    let books_reviews = [];
    for (let i = 0; i < reviewsIds.length; i++) {
        for (let j = 0; j < reviews.length; j++) {
            if (reviews[j].id === reviewsIds[i]) {
                books_reviews.push(reviews[j]);
                break;
            }
        }
    }

    return <ul className={classnames(styles.reviewsList)}>
            {
                books_reviews.map((review) => {
                <li key={review.id}><Review review={review}/></li>
                })
            }
    </ul>
}