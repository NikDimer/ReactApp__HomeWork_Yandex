import {Layout} from "./components/Layout/Layout";
import {BooksPage} from "./pages/BooksPage/BooksPage";
import {booksShop} from "./constants/mock";

export function App() {
    return <Layout>
        <BooksPage booksShop={booksShop}/>
    </Layout>
}