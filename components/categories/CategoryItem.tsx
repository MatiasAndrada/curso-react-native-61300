import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import styles from './styles/categoryItem'
import { colors } from '../../styles/colors';

const CategoryItem = ({ category }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.gridItem}>
            <Pressable
                style={styles.button}
                android_ripple={{ color: colors.highlight }}
                onPress={() => navigation.navigate('ProductListOfCategoryScreen', { category: category })}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.textStyling} ellipsizeMode='tail'>{category}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryItem;