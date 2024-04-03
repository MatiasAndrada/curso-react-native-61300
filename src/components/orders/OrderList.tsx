import { View, FlatList } from 'react-native'
import React from 'react'
//Styles
import styles from "./styles/orderList"
//Components 
import OrderItem from "./OrderItem"
//types 
import type { OrderState } from '../../types'

const OrderList = ({ orders }: { orders: OrderState[] }) => {

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={orders}
                renderItem={({ item }) => {
                    return <OrderItem item={item} />
                }}
                keyExtractor={(item) => item.id.toString()}
            />
        </View >
    )
}


export default OrderList