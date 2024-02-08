import { Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import type { Category } from "../../types/types";
import { getCategories } from "../../data/categories";

const CategoryList = () => {
    const [categories, setCategories] = useState([] as Category[]);
    useEffect(() => {
        const loadCategories = async () => {
            try {
                const categories = await getCategories();
                setCategories(categories);
            } catch (error) {
                console.error("Error loading categories", error);
            }
        };
        loadCategories();
    }, []);
    return (
        <View>
            {/*             <FlatList
                data={categories}
                renderItem={({ item }) => { return <CategoryItem category={item} /> }}

            /> */}
        </View>
    );
}

export default CategoryList;