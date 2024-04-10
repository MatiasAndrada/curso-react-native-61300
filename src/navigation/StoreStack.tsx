import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Components 
import Header from "../components/ui/Header"
//Screens 
import StoreScreen from "../screens/Store";
import ProductListOfCategoryScreen from "../screens/ProductListOfCategory";
import ProductDetail from "../components/products/ProductDetail";

export type StackParamList = {
    SelectCategory: undefined;
    ProductListOfCategory: undefined;
    ProductDetail: undefined;
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
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator >
    )
}