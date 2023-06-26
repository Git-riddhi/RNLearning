import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LocalStorage from './LocalStorage';
import LoginScreen from './Login';
import LocalStorage from './LocalStorageTask';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={LoginScreen} options={{
                    //  headerShown: false,
                   
                    //  headerShown: false,
                }} />

                <Stack.Screen name="LocalStorage" component={LocalStorage} />


            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default AuthNavigator;