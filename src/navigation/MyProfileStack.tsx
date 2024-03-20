import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/ui/Header";
import MyProfile from "../screens/MyProfile";
import ImageSelector from "../screens/ImageSelector";
//import LocationSelector from "../screens/LocationSelector";
//Types 
export type StackParamList = {
    MyProfile: undefined,
    ImageSelector: undefined
}
const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyProfile"
      screenOptions={{ header: () => <Header title="My Profile" /> }}
    >
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="ImageSelector" component={ImageSelector} />
      {/* <Stack.Screen name="Location Selector" component={LocationSelector} /> */}
    </Stack.Navigator>
  );
};

export default MyProfileStack;