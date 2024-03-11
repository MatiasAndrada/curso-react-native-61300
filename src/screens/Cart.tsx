import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getProducts } from '../data/products';
import ProductList from '../components/products/ProductList';

export default function CartScreen() {
    /*     const [products, setProducts] = useState([]);
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
        }, []); */

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Cart Screen</Text>
            {/*             <ProductList products={products} /> */}
        </View>
    );
}