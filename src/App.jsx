import {Layout} from "./components/Layout/Layout";
import {BooksPage} from "./pages/BooksPage/BooksPage";
import {BookPage} from "./pages/BookPage/BookPage";
import {booksShop} from "./constants/mock";



export function App() {
<<<<<<< Updated upstream
    return <Layout>
        {/*<BookPage book={booksShop[1].books[1]}/>*/}
        <BooksPage booksShop={booksShop}/>
    </Layout>
=======
    
    return (
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route exact path="/" element={<BooksPage />} />
                <Route path="/basket" element={<BasketPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            </Layout>
        </BrowserRouter>
    </Provider>
    );
>>>>>>> Stashed changes
}