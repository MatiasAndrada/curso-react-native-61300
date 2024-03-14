import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens 
import AuthScreen from "../screens/auth/Auth";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";

export type StackParamList = {
    Authentication: undefined;
    SignIn: undefined;
    SignUp: undefined;
};

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