import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const SplashScreen = (props) => {


    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const getItem = await AsyncStorage.getItem('Loginkey')
        console.log("splash get item login key  ==else==>", getItem);


        if (getItem === null) {

            console.log("yes null");

            setTimeout(() => {
                props.navigation.navigate("Login")
            }, 1000);
        }
        else {
            setTimeout(() => {
                props.navigation.navigate("Home")
            }, 1000);
            

        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>SPLASH</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color:'orange',
        fontWeight: 'bold'
    }
})
export default SplashScreen;