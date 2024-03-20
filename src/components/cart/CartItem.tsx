import { View, Text } from 'react-native'
import React from 'react'
//Styles 
import styles from "./styles/cartItem"
//Types 
import type { CartItem as CartItemType } from '../../types'

const CartItem = ({ item }: { item: CartItemType }) => {
    return (
        <View style={styles.cardContainer}>
            <Text>{item.title}</Text>
            {/* <Text>{item.brand}</Text> */}
            <Text>{item.price.toString()}</Text>
        </View>
    )
}

export default CartItem