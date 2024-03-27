import { FlatList, View, Text } from "react-native";
//Data
//import orders from "../data/orders.json";
//Components
import OrderItem from "../components/orders/OrderItem";
//Store
import { UseSelector, useSelector } from "react-redux";
//Types
import type { RootState } from "../store";
//Styles
import styles from "./styles/orders";

const OrdersScreen = () => {

    const orderStore = useSelector((state: RootState) => state.orderReducer.value)
    console.log(orderStore)
    
    /*
    const total = item.items.reduce(
        (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
    );*/
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.titleText}>Order Screen</Text>
            {/*
            <FlatList
                data={orders[0].items}
                renderItem={({ item }) => <OrderItem item={item} />}
                keyExtractor={(order) => order.id.toString()}
            />
    */}
            <Text style={styles.totalText}>Total Price:</Text>
        </View>
    );
};

export default OrdersScreen;

