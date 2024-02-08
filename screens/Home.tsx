import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../styles/colors';
import CategoryList from '../components/categories/CategoryList';
import ProductList from '../components/products/ProductList';

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>List of products</Text>
            <Text style={styles.categoryTitle}>Categories:</Text>
            <CategoryList />
            {/* <ProductList /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 8,
    },
});