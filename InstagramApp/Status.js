import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, StatusBar } from 'react-native';


const Status = ({ route, navigation }) => {
    const { name } = route.params
    const { image } = route.params


    return (
        <View style={styles.statusView}>
            <StatusBar backgroundColor="black" barStyle="light-content" />

            <View style={styles.firstView}>
                <View style={styles.secondView}>


                </View>
                <View>

                </View>

            </View>
            <View>
<Image source= {image} style={styles.image}/>
            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
        // marginHorizontal: 15,

    },
    statusView: {
        backgroundColor: 'black',
        width: "100%",
        height: "100%",
        position: 'relative',
        justifyContent: 'center,',
        alignItems: 'center',


    },
    firstView: {
        height: 3,
        width: '95%',
        borderWidth: 1,
        backgroundColor: 'grey',
        top: 18,
    },
    secondView: {
        height: '100%',
        backgroundColor: 'white',
        width: '50%'
    }
});

export default ProfileScreen;