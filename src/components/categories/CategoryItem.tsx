import React from 'react';
import { View, Text, Pressable } from 'react-native';
//Store 
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { setCategorySelected } from '../../features/shop/shopSlice';
//Styles
import styles from './styles/categoryItem'
import { colors } from '../../styles/colors';

import { useNavigation } from '@react-navigation/native';
//Types
import { StackNavigationProp } from '@react-navigation/stack';

import { StackParamList } from '../../navigation/StoreStack';
import type { Category } from '../../types';

type NavigationProp = StackNavigationProp<StackParamList, 'ProductListOfCategoryScreen'>;

/* type Props = {
    navigation: NavigationProp;
}
 */
const CategoryItem = ({ category }: { category: Category }) => {
    const navigation = useNavigation<NavigationProp>();
    const dispatch = useDispatch();

    function handleCategorySelection() {
        dispatch(setCategorySelected(category));
        navigation.navigate('ProductListOfCategoryScreen');
    }


    return (
        <View style={styles.gridItem}>
            <Pressable
                style={styles.button}
                android_ripple={{ color: colors.highlight }}
                onPress={() => handleCategorySelection()}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.textStyling} ellipsizeMode='tail'>{category}</Text>
                </View>
            </Pressable>
        </View >
    )
}

export default CategoryItem;