import {CategoryMenu} from "../../components/CategoryMenu/CategoryMenu";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategoriesIfNotExist } from "../../store/category/loadCategoriesIfNotExist";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategoriesIfNotExist);
  }, []);

  return (
    <main>
        <CategoryMenu />
    </main>
  );
};
