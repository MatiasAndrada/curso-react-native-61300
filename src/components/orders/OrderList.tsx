import { View, FlatList } from 'react-native'
import React from 'react'
//Styles
import styles from "./styles/orderList"
//Components 
import OrderItem from "./OrderItem"
//types 
import type { CartItem as OrderItemType } from '../../types'

const OrderList = ({ orderItems }: { orderItems: OrderItemType[] }) => {

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={orderItems}
                renderItem={({ item }) => {
                    return <OrderItem item={item} />
                }}
                keyExtractor={(item) => item.id.toString()}
            />
        </View >
    )
}


export default OrderList