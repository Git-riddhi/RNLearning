import React from 'react'
import LoginScreen from './LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './SplashScreen';
import FindTrain from './FindTrain';
import CitySelection from './CitySelection';
import PassengerDetails from './PassengerDetails';
import ConfirmTicket from './ConfirmTicket';
import FareBreakUp from './FareBreakUp';


const Stack = createNativeStackNavigator();

const AppRoutesScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="FindTrain" component={FindTrain} />
        <Stack.Screen name="CitySelection" component={CitySelection} />
        <Stack.Screen name="PassengerDetails" component={PassengerDetails} />
        <Stack.Screen name="ConfirmTicket" component={ConfirmTicket} />
        <Stack.Screen name="FareBreakUp" component={FareBreakUp} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutesScreen;