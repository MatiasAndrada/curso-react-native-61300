import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import type { Category } from "../../types";
import { getCategories } from "../../data/categories";

const CategoryList = () => {
    const [categories, setCategories] = useState([] as Category[]);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const loadedCategories = await getCategories();
                setCategories(loadedCategories);
            } catch (error) {
                console.error("Error loading categories", error);
            }
        };

        loadCategories();
    }, []);

    return (

        <FlatList
            data={categories}
            numColumns={2}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => <CategoryItem category={item} />}
        />

    );
}

export default CategoryList;
