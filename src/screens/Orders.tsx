import { FlatList, View } from "react-native";
//Data
import orders from "../data/orders.json";
import OrderItem from "../components/orders/OrderItem";
//Styles
import styles from "./styles/orders";

const OrdersScreen = () => {
    return (
        <View style={styles.screenContainer}>
            <FlatList
                data={orders}
                renderItem={({ item }) => <OrderItem item={item} />}
                keyExtractor={(order) => order.id.toString()}
            />
        </View>
    );
};

export default OrdersScreen;

