import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
            initialRouteName="StoreScreen">
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