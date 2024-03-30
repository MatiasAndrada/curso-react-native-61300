import { View, FlatList, Text } from 'react-native'
import React from 'react'
//Styles
import styles from "./styles/orderList"
//Components 
import OrderItem from "./OrderItem"
//types 


const OrderList = ({ productsCount }: { productsCount: number[] }) => {

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={productsCount}
                renderItem={({ item }) => {
                    return (/*<OrderItem item={item} />*/
                        <Text>{item}</Text>
                    )
                }}
                keyExtractor={(item) => item.toString()}
            />
        </View >
    )
}


export default OrderList