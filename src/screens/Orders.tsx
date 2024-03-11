import { FlatList, View } from "react-native";
import orders from "../data/orders.json";
import OrderItem from "../components/orders/OrderItem";

const OrdersScreen = () => {
    return (
        <View>
            <FlatList
                data={orders}
                renderItem={({ item }) => <OrderItem item={item} />}
                keyExtractor={(order) => order.id.toString()}
            />
        </View>
    );
};

export default OrdersScreen;

