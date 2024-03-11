import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles/home';
import Search from '../components/ui/Search';
import CategoryList from '../components/categories/CategoryList';


export default function StoreScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Category</Text>
            {/*  <Search name="categories" onSearch={(data) => { console.log(data) }} /> */}
            <CategoryList />
        </View>
    );
}
