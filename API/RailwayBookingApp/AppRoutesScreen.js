import React from 'react'
import LoginScreen from './LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './SplashScreen';
import TrainSelection from './TrainSelection';
import FindTrain from './FindTrain';


const Stack = createNativeStackNavigator();

const AppRoutesScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown :false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="FindTrain" component={FindTrain} />

        <Stack.Screen name="TrainSelection" component={TrainSelection} options={{headerShown:true, headerTitle:'Book a Tickets'}} />


 

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutesScreen;