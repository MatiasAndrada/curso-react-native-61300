import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Components 
import Header from "../components/ui/Header"
//Screens 
import StoreScreen from "../screens/Store";
import ProductListOfCategoryScreen from "../screens/ProductListOfCategory";

export type StackParamList = {
    SelectCategory: undefined;
    ProductListOfCategory: undefined;
};
export default function StoreStack() {
    const Stack = createNativeStackNavigator<StackParamList>()
    return (
        <Stack.Navigator
            initialRouteName="SelectCategory"
            screenOptions={{ header: () => <Header title="Store" /> }}
        >
            <Stack.Screen name="SelectCategory" component={StoreScreen}
            />
            <Stack.Screen name="ProductListOfCategory" component={ProductListOfCategoryScreen} />
        </Stack.Navigator >
    )
}