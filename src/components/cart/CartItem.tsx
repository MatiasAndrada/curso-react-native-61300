import { View, Text } from 'react-native'
import React from 'react'
//Types 
import type { CartItem as CartItemType } from '../../types'

const CartItem = ({ item }: { item: CartItemType }) => {
    return (
        <View>
            <Text>{item.title}</Text>
            {/* <Text>{item.brand}</Text> */}
            <Text>{item.price.toString()}</Text>
        </View>
    )
}

export default CartItem