import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    SectionList,
    Image,
    TextInput,
} from 'react-native';


const Activity = () => {
    return(
        <View style={styles.activityContainer}>
            <Text style={styles.text}>

            </Text>
        </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 15,

    },
    activityContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    }
});

export default Activity;