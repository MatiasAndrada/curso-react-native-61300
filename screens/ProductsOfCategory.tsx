import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles/productsOfCategory";
import ProductList from '../components/products/ProductList'
import type { Product } from "../types/types";
import { getProductsOfCategory } from "../data/products";

const ProductsOfCategory = ({ route }) => {
    const { category } = route.params;
    const [products, setProducts] = useState([] as Product[]);
    useEffect(() => {
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
            <Text style={styles.title}>{category}</Text>
            <ProductList products={products} />
        </View>
    )
}

export default ProductsOfCategory