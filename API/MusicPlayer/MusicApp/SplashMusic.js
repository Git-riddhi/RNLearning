import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const SplashMusic = (props) => {

    useEffect(() => {
        setTimeout(() => {
                props.navigation.navigate("Home")
            }, 1000);
    }, [])

 

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/musicLogo.png')} style={styles.musicLogo} />
            <Text style={styles.text}>Musify</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: '#dc143c',
        fontWeight: 'bold',
        marginVertical: 20
    },
    musicLogo: {
        width: 200,
        height: 200,
    },
})
export default SplashMusic;