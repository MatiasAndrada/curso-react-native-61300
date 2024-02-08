import { View, Text, Pressable } from 'react-native'
import React from 'react'
import style from './styles/categoryItem'

const CategoryItem = ({ category }) => {
    console.log(1)
    return (
        <View style={style.gridItem}>
            <Pressable
                style={style.button}
                android_ripple={{ color: '#ccc' }}
            >
                <View style={style.innerContainer}>
                    <Text style={style.textStyling}>{/* {category} */}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryItem