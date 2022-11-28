import {Layout} from "./components/Layout/Layout";
import {BooksPage} from "./pages/BooksPage/BooksPage";
import {BookPage} from "./pages/BookPage/BookPage";
import {CartPage} from "./pages/CartPage/CartPage";
import {HomePage} from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import {booksShop} from "./constants/mock";

import { useSelector } from "react-redux";
import { selectCategories } from ".//store/category/selectors";

import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";




export function App() {
    
    return (
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route index path="/" element={<BooksPage />}/>
                <Route path="/books" element={<BooksPage />}>
                    <Route path=":bookId" element={<BookPage />} />
                </Route>
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            </Layout>
        </BrowserRouter>
    </Provider>
    );
}