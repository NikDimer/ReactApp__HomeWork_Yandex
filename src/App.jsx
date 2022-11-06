import {Layout} from "./components/Layout/Layout";
import {BooksPage} from "./pages/BooksPage/BooksPage";
import {BookPage} from "./pages/BookPage/BookPage";
import {booksShop} from "./constants/mock";



export function App() {
    return <Layout>
        {/*<BookPage book={booksShop[1].books[1]}/>*/}
        <BooksPage booksShop={booksShop}/>
    </Layout>
}