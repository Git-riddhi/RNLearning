import React, { useState } from 'react';
import {View,Text,Button,ScrollView, StyleSheet, StatusBar} from 'react-native';


const ProfileScreen = () => {

    return(
        <View style={styles.profileView}>


        </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
        // marginHorizontal: 15,

    },
    profileView:{
        width:"100%",
        height:"100%",
       
        
    }
});

export default ProfileScreen;