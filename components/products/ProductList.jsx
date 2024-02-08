import { Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import styles from "./styles/productList";
import { Product } from "../../types/types";
import { getProducts } from "../../data/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error loading products", error);
      }
    };
    loadProducts();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProductList</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => {
          return <ProductItem product={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
export default ProductList;
