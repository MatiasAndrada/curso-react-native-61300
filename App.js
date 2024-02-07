import { StyleSheet, Text, View, AppRegistry } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import ProductList from "./components/products/ProductList";
import { PaperProvider } from "react-native-paper";
import { getProducts } from "./data/products";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products = getProducts();
    setProducts(products);
  }, []);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.text}>HOLA!</Text>
        {/* <StatusBar style="auto" /> */}
        <ProductList products={products} />
      </View>
    </PaperProvider>
  );
}
AppRegistry.registerComponent("curso-react-native-61300", () => Main); // Proporciona el tema  a todos los componentes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "blue",
    textShadowOffset: { width: 6, height: 10 },
    textShadowRadius: 22,
  },
});
