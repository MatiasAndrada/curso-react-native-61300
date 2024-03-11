import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./TabNavigator";


export default function Navigation() {
    return (
        <NavigationContainer >
            <MyTabs />
        </NavigationContainer>
    )
}