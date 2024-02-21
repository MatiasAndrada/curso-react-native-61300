import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import style from './styles/categoryItem'
import { colors } from '../../styles/colors';

const CategoryItem = ({ category }) => {
    const navigation = useNavigation();

    return (
        <View style={style.gridItem}>
            <Pressable
                style={style.button}
                android_ripple={{ color: colors.highlight }}
                onPress={() => navigation.navigate('ProductListOfCategoryScreen', { category: category })}
            >
                <View style={style.innerContainer}>
                    <Text style={style.textStyling} ellipsizeMode='tail'>{category}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryItem;