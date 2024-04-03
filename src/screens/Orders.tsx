import { View, Text } from "react-native";
import { useEffect, useState } from "react";
//Data
//Components
import OrderList from "../components/orders/OrderList";
//Services
import { useGetOrdersQuery } from "../services/shopService";
//Store
import { useSelector, useDispatch } from "react-redux";
import { setOrders } from "../features/shop/orderSlice";
//Types
import type { RootState } from "../store";
import { OrderState } from "../types";
//Styles
import styles from "./styles/orders";

const OrdersScreen = () => {
    const dispatch = useDispatch()
    const userId = useSelector((state: RootState) => state.authReducer.value.localId)

    const { data: orderItems, isLoading, error } = useGetOrdersQuery(userId)
    if (error) {
        return console.log(error)
    }
    const orderStore = useSelector((state: RootState) => state.orderReducer.value)

    useEffect(() => {
        if (orderItems) {
            dispatch(setOrders(orderItems))
        }
    }, [userId, orderItems])

    const totalOrders = orderStore.reduce((acc, item) => acc + item.total, 0)

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.titleText}>Orders Screen</Text>
            {
                orderStore.length > 0 ? (
                    <>
                        <OrderList orders={orderStore} />
                        <Text style={styles.totalText}>Total Price: ${totalOrders}</Text>
                    </>
                ) :
                    (
                        <Text style={styles.isEmptyText}>No hay productos agregados</Text>
                    )
            }
        </View>
    );
};

export default OrdersScreen;

