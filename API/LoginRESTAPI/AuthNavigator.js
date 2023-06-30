import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Splash';
import LoginScreen from './Login';
import RegisterScreen from './Register';
import HomeScreen from './Home';
import { AuthContext } from './AuthContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const { userInfo, splashLoading } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {splashLoading ? (
                    <Stack.Screen
                        name="Splash Screen"
                        component={SplashScreen}
                        options={{ headerShown: false }}
                    />
                ) : userInfo.access_token ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <>
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={RegisterScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;



//App.js 
// import React from 'react'
// import Navigation from './API/LoginRESTAPI/AuthNavigator'
// import { AuthContext, AuthProvider } from './API/LoginRESTAPI/AuthContext'

// const App = () => {
//   return (
//     <AuthProvider>
//       <Navigation />
//     </AuthProvider>

//   )

// }


// export default App