import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
//Store
import { useSelector } from "react-redux";
//Components
import ProductList from "../components/products/ProductList";
import Search from "../components/ui/Search";
//Styles
import styles from "./styles/productsOfCategory";
//Functions
import { useGetProductsByCategoryQuery } from "../services/shopServices";
//Types
import type { RootState } from "../store";
import type { Product } from "../types";

const ProductsListOfCategory = () => {
  const [keyword, setKeyword] = useState("" as string);
  const [products, setProducts] = useState<Product[]>([]);
  const category = useSelector((state: RootState) => state.shopReducer.value.categorySelected);


  const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category);



  useEffect(() => {
    if (productsFilteredByCategory) {
      const productsRaw: Product[] = Object.values(productsFilteredByCategory)
      const productsFiltered: Product[] = productsRaw.filter((product: Product) =>
        product.title.includes(keyword)
      );
      setProducts(productsFiltered);
    }
  }, [productsFilteredByCategory, keyword]);


  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} />
      <ProductList products={products} />
    </View>
  );
};

export default ProductsListOfCategory;
