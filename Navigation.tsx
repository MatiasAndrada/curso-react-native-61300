import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "./styles/colors";
// Screens
import CartScreen from "./screens/Cart";
import UserScreen from "./screens/User";
import HomeScreen from "./screens/Home";
import ProductListOfCategoryScreen from "./screens/ProductsOfCategory";


const HomeStack = createNativeStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen">
      <HomeStack.Screen name="HomeScreen" component={HomeScreen}
        options={
          {
            headerShown: false,
          }
        }
      />
      <HomeStack.Screen name="ProductListOfCategoryScreen" component={ProductListOfCategoryScreen} />
    </HomeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.active
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen}
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

