import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Components
import Header from "../components/ui/Header";
import CartScreen from "../screens/Cart";
//import LocationSelector from "../screens/LocationSelector";
//Types 
export type StackParamList = {
    CartScreen: undefined,
}
const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="CartScreen"
            screenOptions={{ header: () => <Header title="Cart" /> }}
        >
            <Stack.Screen name="CartScreen" component={CartScreen} />
            {/* <Stack.Screen name="Location Selector" component={LocationSelector} /> */}
        </Stack.Navigator>
    );
};

export default CartStack;