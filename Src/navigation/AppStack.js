import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home/Home";

const Stack = createStackNavigator()

const AppStack = () =>{
    <Stack.Navigator screenOptions={{headerShown : false}}>
    <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
}

export default AppStack