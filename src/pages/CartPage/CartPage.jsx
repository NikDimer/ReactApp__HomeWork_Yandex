import {CartCheckout} from "../../components/CartCheckout/CartCheckout";
import {CategoryBooksList} from "../../components/CategoryBooksList/CategoryBooksList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { selectCartModule } from "../../store/cart/selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryById } from "../../store/category/selectors";
import { loadCategoriesIfNotExist } from "../../store/category/loadCategoriesIfNotExist";


export const CartPage = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => selectCartModule(state));

    // Стейт отвечает содержит в себе активную категорию
    const [activeCategory, setActiveCategory] = useState(1);

    //console.log(activeCategory, ')')
        


    //console.log(categories, '!!!')

    



    useEffect(() => {
        dispatch(loadCategoriesIfNotExist);
    }, []);

    return (
    <main>
        <CartCheckout cart={cart}/>
        {/*<CategoryBooksList categoryId={activeCategory} />*/}
    </main>
    );
}