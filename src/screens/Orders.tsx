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
    const userToken = useSelector((state: RootState) => state.authReducer.value.token)
    const { data: orderItems, isLoading, error }: { data: OrderState[], isLoading: boolean, error: any } = useGetOrdersQuery(userToken)
    const orderStore = useSelector((state: RootState) => state.orderReducer.value)


    useEffect(() => {
        if (orderItems) {
            dispatch(setOrders(orderItems))
            const itemsCount = orderItems
        }
    }, [userToken, orderItems])


    return (
        <View style={styles.screenContainer}>
            <Text style={styles.titleText}>Order Screen</Text>


            <OrderList orderItems={orderStore.total} />

            <Text style={styles.totalText}>Total Price:</Text>
        </View>
    );
};

export default OrdersScreen;

