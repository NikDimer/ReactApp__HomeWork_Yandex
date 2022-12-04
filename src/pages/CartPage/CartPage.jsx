import {CartCheckout} from "../../components/CartCheckout/CartCheckout";
import {CartBookList} from "../../components/CartBookList/CartBookList";
import {CategoryBooksList} from "../../components/CategoryBooksList/CategoryBooksList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { selectCartModule } from "../../store/cart/selectors";
import { useDispatch, useSelector } from "react-redux";
import { loadCategoriesIfNotExist } from "../../store/category/loadCategoriesIfNotExist";


import { selectBooksForBookPage } from "../../store/bookForBookPage/selectors";
import { selectIsBooksForBookPageLoading } from "../../store/bookForBookPage/selectors";
import { loadBooksForBookPageIfNotExist } from "../../store/bookForBookPage/loadBooksForBookPageIfNotExist";


export const CartPage = () => {
    {/*const dispatch = useDispatch();

    const cart = useSelector((state) => selectCartModule(state));

    useEffect(() => {
        dispatch(loadCategoriesIfNotExist);
    }, []);*/}
    const books = useSelector((state) => selectBooksForBookPage(state));
    let cartList = useSelector((state) => selectCartModule(state));
    let isLoading = useSelector((state) => selectIsBooksForBookPageLoading(state));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBooksForBookPageIfNotExist());
    }, []);

    if (isLoading) {
        return <span>Loading...</span>
    }

    let book = books[0];

    let cart;
    cart = [];
    for (var key in cartList) {
        cart.push(
            {
                bookId: key,
                count: cartList[key]
            }
        );
    }

    return (
    <main>
        {book && <CartCheckout cart={cart} books={books}/>}
        {book && <CartBookList cart={cart} books={books}/>}
    </main>
    );
}