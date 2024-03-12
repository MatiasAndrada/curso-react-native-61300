import { Text, View, FlatList } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";
import type { Product } from "../../types";
import styles from "./styles/productList";

const ProductList = ({ products }: { products: Product[] }) => {

  /*   if (products.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No products found</Text>
        </View>
      );
    } */
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => {
        return <ProductItem product={item} />;
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
export default ProductList;





