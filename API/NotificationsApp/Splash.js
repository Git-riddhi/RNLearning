import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {  useEffect } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';


const Splash = (props) => {

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

        <ImageBackground
            source={require("../../assets/splash.png")}
            resizeMode="cover"
            style={styles.image}
        ></ImageBackground>

    );
}
const styles = StyleSheet.create({

    text: {
        fontSize: 30,
        color: 'orange',
        fontWeight: 'bold'
    },
    image: {
        flex: 1,

    },
})
export default Splash;