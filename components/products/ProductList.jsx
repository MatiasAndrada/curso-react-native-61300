import { Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles/productList";
import ProductItem from "./ProductItem";
import { Product } from "../../types/types";

const ProductList = ({ products }) => {
  console.log("🦇 ~ ProductList ~ products");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProductList</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
export default ProductList;
