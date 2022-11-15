import {CategoryMenu} from "../../components/CategoryMenu/CategoryMenu";
import {CategoryBooksList} from "../../components/CategoryBooksList/CategoryBooksList";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectCategories } from "../../store/category/selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryById } from "../../store/category/selectors";
import { loadCategoriesIfNotExist } from "../../store/category/loadCategoriesIfNotExist";


export const BooksPage = () => {
    const dispatch = useDispatch();
        
    const categories = useSelector((state) => selectCategories(state));

    console.log(categories)
    const { categoryId } = useParams();
    var category = useSelector((state) => selectCategoryById(state, categoryId));
    console.log(category)

    useEffect(() => {
        dispatch(loadCategoriesIfNotExist);
      }, []);

    if (!category) {
    return null;
    }

    return (
    <main>
        <CategoryMenu />
        <CategoryBooksList categoryId={category.id} />
    </main>
    );
}