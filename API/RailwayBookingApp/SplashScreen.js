
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const SplashScreen = (props) => {
    setTimeout(() => {
        props.navigation.navigate("Login")
    }, 1000);


    return (
        <View style={styles.container}>
            <Image source={require("../../assets/splashImageForTrain.png")} style={{ height: 300, width: 300 }} />
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
        fontSize: 20,
        marginVertical: 20,
        color: 'orange',
        fontWeight: 'bold'
    }
})
export default SplashScreen;