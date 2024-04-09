import { View, Text } from 'react-native'
import React from 'react'
//Styles 
import styles from "./styles/cartItem"
//Types 
import type { CartItem as CartItemType } from '../../types'

const CartItem = ({ item }: { item: CartItemType }) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
            <View style={styles.leftContainer} >
                {/* <Text>{item.brand}</Text> */}
                <Text style={styles.label} >Count products:</Text>
                <Text style={styles.quantityText}>x{item.quantity.toString()}</Text>
                <Text style={styles.label} >Total:</Text>
                <Text style={styles.priceText}>${item.price.toString()}</Text>
            </View>
        </View >
    )
}

export default CartItem;