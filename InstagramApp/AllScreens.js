import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import Reels from './Reels';
import Activity from './Activity';
import ProfileScreen from './ProfileScreen';
import Post from './Post';
import Inbox from './Inbox';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './SignUp';
import DrawerScreen from './CreateScreen';
import CreateScreen from './CreateScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Stories from './InstagramApp/Stories';

const AllScreens = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    // const Drawer = createDrawerNavigator();

    const TabScreen = () => {
        return (
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { height: 50 },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home-sharp'
                            : 'home-outline'
                        size = focused ? size + 6 : size + 2;
                        color = 'black'
                    } else if (route.name === 'Search') {
                        iconName = focused
                            ? 'search'
                            : 'ios-search-outline'
                        color = 'black'
                    }

                    else if (route.name === 'Reels') {
                        iconName = focused
                            ? 'caret-forward-circle'
                            : 'caret-forward-circle-outline'
                        color = 'black'

                    }
                    else if (route.name === 'Activity') {
                        iconName = focused
                            ? 'ios-heart'
                            : 'heart-outline'
                        color = 'black'

                    }
                    else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'ios-person-circle'
                            : 'ios-person-circle-outline'
                        color = 'black'

                    }
                    else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'ios-person-circle'
                            : 'ios-person-circle-outline'
                        color = 'black'

                    }
                    //   console.log("route====================",route,focused,iconName,color);
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Reels" component={Reels} />
                <Tab.Screen name="Activity" component={Activity} />
                <Tab.Screen name="Profile" component={ProfileScreen} />

            </Tab.Navigator>
        )
    }
    return (


        <NavigationContainer>
            <Stack.Navigator initialRouteName={'AllScreens'} screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="AllScreens" component={TabScreen} />
                <Stack.Screen name="Post" component={Post} />
                <Stack.Screen name="Inbox" component={Inbox} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Create" component={CreateScreen} />

                {/* <Stack.Screen name="AllScreens" component={AllScreens} /> */}


            </Stack.Navigator>

        </NavigationContainer>

    )

}


export default AllScreens;