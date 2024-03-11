import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Screens
import StoreStack from "./StoreStack";
import AuthStack from "./AuthStack";
import CartScreen from "../screens/Cart";

//Styles
import { colors } from "../styles/colors";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Store"
            screenOptions={{
                tabBarActiveTintColor: colors.active,
            }}
        >
            <Tab.Screen
                name="Store"
                component={StoreStack}
                options={{
                    tabBarLabel: "Store",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="store" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarLabel: "Cart",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="cart-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            {/*       <Tab.Screen name="Orders" component={OrdersScreen}
        options={
        {
            tabBarLabel: "Orders",
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
            )
        }
        }
      /> */}
            <Tab.Screen
                name="Auth"
                component={AuthStack}
                options={{
                    tabBarLabel: "Auth",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;

/* const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.blue_100,
        height: 70,
    },
    tabContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
}); */
