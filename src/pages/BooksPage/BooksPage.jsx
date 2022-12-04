import {CategoryMenu} from "../../components/CategoryMenu/CategoryMenu";
import {CategoryBooksList} from "../../components/CategoryBooksList/CategoryBooksList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { selectCategories } from "../../store/category/selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryById } from "../../store/category/selectors";
import { loadCategoriesIfNotExist } from "../../store/category/loadCategoriesIfNotExist";


export const BooksPage = () => {
    const dispatch = useDispatch();

    const categories = useSelector((state) => selectCategories(state));

    // Стейт отвечает содержит в себе активную категорию
    const [activeCategory, setActiveCategory] = useState(1);


    console.log(activeCategory, "000000")

    useEffect(() => {
        dispatch(loadCategoriesIfNotExist);
    }, []);

    return (
    <main>
        <CategoryMenu setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
        <CategoryBooksList categoryId={activeCategory} />
    </main>
    );
}