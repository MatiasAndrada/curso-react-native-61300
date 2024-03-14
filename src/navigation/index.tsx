import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./TabNavigator";
import AuthStack from "./AuthStack";


export default function Navigation() {
    const [user, setUser] = useState(null)
    return (
        <NavigationContainer >
            {
                user ? <MyTabs /> : <AuthStack />
            }
        </NavigationContainer>
    )
}