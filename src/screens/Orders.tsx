import { FlatList, View, Text } from "react-native";
//Data
import orders from "../data/orders.json";
import OrderItem from "../components/orders/OrderItem";
//Styles
import styles from "./styles/orders";

const OrdersScreen = () => {
    /*
    const total = item.items.reduce(
        (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
    );*/
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.titleText}>Order Screen</Text>
            <FlatList
                data={orders[0].items}
                renderItem={({ item }) => <OrderItem item={item} />}
                keyExtractor={(order) => order.id.toString()}
            />
            <Text style={styles.totalText}>Total Price:</Text>
        </View>
    );
};

export default OrdersScreen;

