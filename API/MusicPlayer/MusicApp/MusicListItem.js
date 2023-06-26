import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import React from 'react';
import { useNavigation } from "@react-navigation/native";


const { height, width } = Dimensions.get('window');

const MusicListITem = ({ item, index, data }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.container, { marginBottom: index == data.length - 1 ? 30 : 0 }]}
            onPress={() => {
                navigation.navigate('Music',
                    {
                        data: item,
                        index: index
                    });
            }}
        >

            <Image source={item.image} style={styles.songImage} />
            <View>
                <Text style={styles.songsName}>{item.name}</Text>
                <Text style={styles.singerName}>{item.singer}</Text>

            </View>
           
        </TouchableOpacity>
    )
}

export default MusicListITem;

const styles = StyleSheet.create({
    container: {
        width: width - 20,
        height: 70,
        elevation: 5,
        marginTop: 15,
        alignSelf: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    songsName: {
        fontSize: 14,
        color: '#4169e1',
        marginLeft: 10,

    },
    songImage: {
        width: 50,
        height: 50,
        marginLeft: 5,

    },
    singerName: {
        fontSize: 12,
        color: 'black',
        marginLeft: 10,
        color: '#db7093'
    }
})