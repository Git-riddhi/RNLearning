import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Image,
} from 'react-native';
import { songs } from './MusicData';
import MusicListITem from './MusicListItem';

const { height, width } = Dimensions.get('window');

const Home = () => {
  
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../../../assets/musicLogo.png')} style={styles.musicLogo} />
                    <Text style={styles.logo}>Musify</Text>
                </View>
                <FlatList
                    data={songs}
                    horizontal={false}
                    keyExtractor={item => item.id}
                    renderItem={({item,index})=>{
                        return <MusicListITem 
                        item={item}
                        index={index}
                        data={songs}
                        />

                    }}
                />
            </View>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        musicLogo: {
            width: 50,
            height: 50,
            marginLeft: 10,
        },
        header: {
            height: 60,
            backgroundColor: '#fff',
            width: '100%',
            elevation: 5,
            flexDirection: 'row',
            alignItems: 'center'
        },
      
        logo: {
            marginLeft: 10,
            fontSize: 20,
            color: '#dc143c',
            fontWeight: 'bold'
        },
       
    });

    export default Home;
