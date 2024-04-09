import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Components
import Header from "../components/ui/Header";
import OrdersScreen from "../screens/Orders";
//import LocationSelector from "../screens/LocationSelector";
//Types 
export type StackParamList = {
    Order: undefined,
}
const Stack = createNativeStackNavigator();

const OrdersStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Order"
            screenOptions={{ header: () => <Header title="Order" /> }}
        >
            <Stack.Screen name="Order" component={OrdersScreen} />
            {/* <Stack.Screen name="Location Selector" component={LocationSelector} /> */}
        </Stack.Navigator>
    );
};

export default OrdersStack;