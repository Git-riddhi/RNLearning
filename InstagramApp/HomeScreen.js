import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, StatusBar, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icontwo from 'react-native-vector-icons/FontAwesome';
import Stories from './Stories';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Post from './Post';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />

            <View style={styles.headerView}>

                <Text style={styles.textStyle} >
                    Instagram
                </Text>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                <Icontwo  style={{marginRight:30}}  name='plus-square-o' size={25} color='black' onPress={() => { navigation.navigate("Create") }} />

                <Icon name='ios-navigate-circle-outline' size={27} color='black' onPress={() => { navigation.navigate("Inbox") }} />

                </View>

            </View>

            <ScrollView>
                <Stories />

            </ScrollView>

            <ScrollView>
                <Post />

            </ScrollView>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // paddingTop: StatusBar.currentHeight,
        // marginHorizontal: 15,

    },
    headerView: {
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 10,
        marginBottom: 10

    },

    textStyle: {
        fontFamily: '',
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default HomeScreen;