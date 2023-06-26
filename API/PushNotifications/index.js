// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NotificationServices, getFcmToken, requestUserPermission } from './PushNotification';
// import messaging from '@react-native-firebase/messaging';

// const PushNotification = () => {

//     // const navigation = useNavigation();
//     const [loading, setLoading] = useState(true);
//     const [initialRoute, setInitialRoute] = useState('Home');

//     useEffect(() => {
//         requestUserPermission()
//         getFcmToken()


//         messaging().onNotificationOpenedApp(remoteMessage => {
//             console.log(
//                 'Notification caused app to open from background state:',
//                 remoteMessage.notification,
//             );
//             // navigation.navigate(remoteMessage.data.type);
//         });

//         // Check whether an initial notification is available
//         messaging()
//             .getInitialNotification()
//             .then(remoteMessage => {
//                 if (remoteMessage) {
//                     console.log(
//                         'Notification caused app to open from quit state:',
//                         remoteMessage.notification,
//                     );
//                     // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
//                 }
//                 setLoading(false);
//             });
//     }, []);


//     return (

//         <View style={styles.container}>
//             <Text style={styles.title}>
//                 Hello Riddhi
//             </Text>
//         </View>

//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     title: {
//         fontSize: 22,
//         fontWeight: '700'
//     }
// });

// export default PushNotification;