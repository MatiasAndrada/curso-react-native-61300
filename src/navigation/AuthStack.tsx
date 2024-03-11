import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens 
import AuthScreen from "../screens/Auth";
import SignIn from "../components/signIn/SignIn";
import SignUp from "../components/signUp/SignUp";

export default function AuthStack() {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="Authentication">
            <Stack.Screen name="Authentication" component={AuthScreen}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Stack.Screen name="SignIn" component={SignIn}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Stack.Screen name="SignUp" component={SignUp}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
        </Stack.Navigator>
    )
}