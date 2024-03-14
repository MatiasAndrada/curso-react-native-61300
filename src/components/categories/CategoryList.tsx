import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import type { Category } from "../../types";
import { getCategories } from "../../data/categories";
import { useGetCategoriesQuery } from "../../services/shopService";

const CategoryList = () => {

    const { data, isLoading, error } = useGetCategoriesQuery(undefined);

    return (

        <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => <CategoryItem category={item} />}
        />

    );
}

export default CategoryList;
