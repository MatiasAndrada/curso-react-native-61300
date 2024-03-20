import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Components 
import Header from "../components/ui/Header"
//Screens 
import StoreScreen from "../screens/Store";
import ProductListOfCategoryScreen from "../screens/ProductListOfCategory";

export type StackParamList = {
    StoreScreen: undefined;
    ProductListOfCategoryScreen: undefined;
};
export default function StoreStack() {
    const Stack = createNativeStackNavigator<StackParamList>()
    return (
        <Stack.Navigator
            initialRouteName="StoreScreen"
            screenOptions={{ header: () => <Header title="Store" /> }}

            >
            <Stack.Screen name="StoreScreen" component={StoreScreen}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Stack.Screen name="ProductListOfCategoryScreen" component={ProductListOfCategoryScreen} />
        </Stack.Navigator>
    )
}