import { FlatList } from 'react-native'
import React from 'react'
//Components 
import CartItem from './CartItem'

//Types
import type { CartItem as CartItemType } from '../../types'

const CartList = ({ cartItems }: { cartItems: CartItemType[] }) => {
    return (
        <FlatList
            data={cartItems}
            renderItem={({ item }) => {
                return <CartItem item={item} />
            }}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default CartList