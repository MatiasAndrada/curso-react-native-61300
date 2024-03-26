import { FlatList, View } from 'react-native'
import React from 'react'
//Components 
import CartItem from './CartItem'
//Styles 
import styles from "./styles/cartList"
//Types
import type { CartItem as CartItemType } from '../../types'

const CartList = ({ cartItems }: { cartItems: CartItemType[] }) => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => {
                    return <CartItem item={item} />
                }}
                keyExtractor={(item) => item.id.toString()}
            />
        </View >
    )
}

export default CartList;