import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles/productsOfCategory";
import ProductList from "../components/products/ProductList";
import Search from "../components/ui/Search";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import type { Product } from "../types";
import { getProductsOfCategory } from "../data/products";

const ProductsListOfCategory = () => {
  const category = useSelector((state: RootState) => state.shopReducer.value.categorySelected);
  console.log("🦇  ProductsListOfCategory  category:", category)

  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    if (!category) return;
    const loadProducts = async () => {
      try {
        const products = await getProductsOfCategory(category);
        setProducts(products);
      } catch (error) {
        console.error("Error loading products", error);
      }
    };
    loadProducts();
  }, []);
  return (
    <View style={styles.container}>
      <ProductList products={products} />
    </View>
  );
};

export default ProductsListOfCategory;
