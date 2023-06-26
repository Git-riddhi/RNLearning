import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, I18nManager } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native';
import { songs } from '../MusicPlayer/MusicApp/MusicData';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const RTLSupport = () => {
    const [isRTL, setISRTL] = useState(true)

    const renderItemData = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={[isRTL ? styles.viewRTLItemContainer : styles.viewItemContainer]}>
                    <Image
                        style={styles.imageContactStyle}
                        resizeMode='cover'
                        source={item.image} />
                    <View style={[isRTL ? styles.viewRTLNameNumberStyle : styles.viewNameNumberStyle]}>
                        <Text style={[isRTL ? styles.textRTLNameStyle : styles.textNameStyle]}>{item.name}</Text>
                        <Text style={[isRTL ? styles.textRTLNumberStyle : styles.textNumberStyle]}>{item.singer}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <View style={styles.buttonViewStyle}>
                <TouchableOpacity style={styles.touichableStyle} onPress={() => { setISRTL(false) }}>
                    <Text style={styles.textStyle}>LTR Support</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touichableStyle} onPress={() => { setISRTL(true) }}>
                    <Text style={styles.textStyle}>RTL Support</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.flatListStyle}
                data={songs}
                renderItem={renderItemData}
            
            />
        </>
    )
}
const styles = StyleSheet.create({
    touichableStyle: {
        width: deviceWidth / 2.7,
        backgroundColor: 'green',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 10
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 15,
        color: 'white',
    },
    buttonViewStyle: {
        marginVertical: 10,
        padding: 10,
        width: deviceWidth,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    flatListStyle: {
        flex: 1,
        // backgroundColor: 'red'
    },
    viewItemContainer: {
        width: deviceWidth - 20,
        margin: 5,
        padding: 5,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    imageContactStyle: {
        width: 50,
        height: 50,
        borderRadius: 30,
       transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
        // transform:[{scaleX:-1}]
    },
    viewNameNumberStyle: {
        alignSelf: 'center',
        marginLeft: 5,
    },
    textNameStyle: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    },
    textNumberStyle: {
        fontSize: 15,
       
    },
    viewRTLItemContainer: {
        width: deviceWidth - 20,
        margin: 5,
        padding: 5,
        flexDirection: 'row-reverse',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    viewRTLNameNumberStyle: {
        alignSelf: 'center',
        marginRight: 5,
        alignItems: 'flex-end',
        // backgroundColor: 'yellow'
    },
    textRTLNameStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        transform: [{scaleX:-1}]
    
    },
    textRTLNumberStyle: {
        fontSize: 15,
        transform: [{scaleX:-1}]
    }
})
export default RTLSupport