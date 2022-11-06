import {CategoryMenu} from "../../components/CategoryMenu/CategoryMenu";
import {CategoryBooksList} from "../../components/CategoryBooksList/CategoryBooksList";
import {useState} from "react";

import {activeCategory} from "../../components/CategoryMenu/CategoryMenu";


export const BooksPage = (props) => {
    const [activeCategory, setactiveCategory] = useState(props.booksShop[0]);

    return <main>
        <CategoryMenu booksShop={props.booksShop} setCategory={setactiveCategory}/>
        <CategoryBooksList category={activeCategory} />
    </main>
}