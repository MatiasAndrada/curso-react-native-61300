import { Text, View, FlatList } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";
import styles from "./styles/productList";

const ProductList = ({ products }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => {
        return <ProductItem product={item} />;
      }}
      df
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
export default ProductList;
