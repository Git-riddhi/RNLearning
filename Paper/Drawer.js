import * as React from 'react';
import { Drawer } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Favorites from './Favorites';

const DrawerScreen = () => {
  const Drawer1 = createDrawerNavigator();

  function CustomDrawerContent({ navigation }) {
    return (
      <Drawer.Section title="Some title">
        <Drawer.CollapsedItem
          focusedIcon="inbox"
          unfocusedIcon="inbox-outline"
          label="Inbox"
        />

        <Drawer.CollapsedItem
          focusedIcon="star"
          unfocusedIcon="star-outline"
          label="Starred"
        />
      </Drawer.Section>
    )
  }
  return (
    <NavigationContainer>
      <Drawer1.Navigator screenOptions={{
        headerLabelVisible: false,
      }}>
        <Drawer1.Screen name="Favorites" component={Favorites} drawerContent={(props) => <CustomDrawerContent {...props} drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }} />} />

      </Drawer1.Navigator>
    </NavigationContainer>

  );
}

export default DrawerScreen;