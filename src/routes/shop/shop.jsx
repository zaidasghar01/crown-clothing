import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { setCategories } from "../../store/catogeries/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCollectionAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
