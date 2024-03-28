import { View, Text } from "react-native";
import { useEffect } from "react";
//Data
//Components
import OrderList from "../components/orders/OrderList";
//Services
import { useGetOrdersQuery } from "../services/shopService";
//Store
import { useSelector } from "react-redux";
//Types
import type { RootState } from "../store";
//Styles
import styles from "./styles/orders";

const OrdersScreen = () => {
    const userToken = useSelector((state: RootState) => state.authReducer.value.token)
    const { data: orderItems, isLoading, error } = useGetOrdersQuery(userToken)
    console.log(orderItems)
    const orderStore = useSelector((state: RootState) => state.orderReducer.value)
    console.log(orderStore)
    /*
    const [triggerPost, result] = useGetOrdersQuery();
    console.log(triggerPost)
    console.log(result)
*/

    /*
    const total = item.items.reduce(
        (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
    );*/
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.titleText}>Order Screen</Text>
            {/*
            
            <OrderList orderItems={orderItems} />
    */}
            <Text style={styles.totalText}>Total Price:</Text>
        </View>
    );
};

export default OrdersScreen;

