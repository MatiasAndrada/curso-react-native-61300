import { View, Text } from 'react-native'
import React, { useEffect, useState } from "react";
import ProductList from '../components/products/ProductList'
import { getProducts } from '../data/products';

const ProductsList = () => {
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
        <View>
            <Text>ProductsList</Text>
            <ProductList products={products} />
        </View>
    )
}

export default ProductsList