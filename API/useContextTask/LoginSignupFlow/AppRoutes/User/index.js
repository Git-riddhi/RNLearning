import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../HomeScreen";
import AddProductScreen from "../../AddProductScreen";

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
    return (
   
            <Stack.Navigator
                initialRouteName="Home"
            
                screenOptions={{ headerShown: false }} >

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AddProduct" component={AddProductScreen} />

            </Stack.Navigator>
    )
      
};
export default UserNavigator;
