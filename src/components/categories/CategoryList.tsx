import { FlatList } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";
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
