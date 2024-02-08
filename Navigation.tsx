import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "./styles/colors";

const Tab = createBottomTabNavigator()

// Screens
import HomeScreen from "./screens/Home";
import CartScreen from "./screens/Cart";
import SettingsScreen from "./screens/User";
import UserScreen from "./screens/User";

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.highlight
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={
          {
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }
        }
      />
      <Tab.Screen name="Cart" component={CartScreen}
        options={
          {
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart-outline" color={color} size={size} />
            )

          }
        }
      />
      <Tab.Screen name="User" component={UserScreen}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}


export default function Navigation() {
  return (
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer>
  )
}

