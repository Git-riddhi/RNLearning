import React, { useState } from 'react';
import { Modal, Text, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Fontisto';
import Icontwo from 'react-native-vector-icons/AntDesign';


export default function CustomAlert({
    displayMode,
    displayMsg,
    visibility,
    dismissAlert,
}) {
    return (
        <View>
            <Modal
                visible={visibility}
                animationType={'fade'}
                transparent={true}
                animationType="slide">
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <View
                        style={{
                            alignItems: 'center',
                            backgroundColor: 'blue',
                            height: 350,
                            width: '90%',
                            borderWidth: 1,
                            borderColor: '#fff',
                            borderRadius: 20,
                            elevation: 10,
                        }}>
                        <View style={{ alignItems: 'center', margin: 10 }}>
                            {
                                displayMode == 'success' ?
                                    <>
                                        <Icon
                                            name="email"
                                            color={'white'}
                                            size={50}
                                        />
                                        <Text style={{ fontSize: 15, marginTop: 10, color: 'white' }}>{displayMsg}</Text>
                                        <TouchableOpacity
                                            activeOpacity={0.9}
                                            onPress={() => dismissAlert(false)}
                                        >
                                            <Icontwo
                                                name="close"
                                                color={'white'}
                                                size={30}
                                            />
                                        </TouchableOpacity>

                                    </>
                                    :
                                    displayMode == 'continue' ?
                                        <>
                                            <Ionicons
                                                name="location-outline"
                                                color={'white'}
                                                size={50}
                                            />
                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Choose location</Text>
                                            <Text style={{ fontSize: 15, marginTop: 10, color: 'white' }}>{displayMsg}</Text>
                                            <View style={{ flexDirection: "row", width: '70%', marginTop: 1 }}>
                                                <TouchableOpacity
                                                    activeOpacity={0.9}
                                                    onPress={() => dismissAlert(false)}
                                                    style={{
                                                        width: '60%',
                                                        height: 45,
                                                        position: 'relative',
                                                        borderColor: '#ffd700',
                                                        borderWidth: 1,
                                                        borderRadius: 30,
                                                        bottom: 0,
                                                        color: 'white',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}>

                                                    <Text style={{
                                                        color: 'white', margin: 15, fontWeight: 'bold',
                                                        textAlign: 'center',
                                                        // marginHorizontal: 30
                                                    }}>Cancel</Text>
                                                </TouchableOpacity>


                                                <TouchableOpacity
                                                    activeOpacity={0.9}
                                                    onPress={() => dismissAlert(false)}
                                                    style={{
                                                        width: '60%',
                                                        height: 45,
                                                        position: 'relative',
                                                        backgroundColor: '#ffd700',
                                                        borderColor: '#ddd',
                                                        borderBottomWidth: 0,
                                                        borderRadius: 30,
                                                        bottom: 0,
                                                        color: 'white',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}>

                                                    <Text style={{
                                                        color: 'white', margin: 15, fontWeight: 'bold',
                                                        textAlign: 'center',
                                                        // marginHorizontal: 30
                                                    }}>Cancel</Text>
                                                </TouchableOpacity>
                                            </View>

                                        </>
                                        :
                                        <>
                                            <Icon name="email" color={'white'} size={50} />
                                            <Text style={{ fontSize: 15, marginTop: 10, color: 'white' }}>{displayMsg}</Text>
                                            <TouchableOpacity
                                                activeOpacity={0.9}
                                                onPress={() => dismissAlert(false)}
                                                style={{
                                                    width: '60%',
                                                    height: 45,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    position: 'relative',
                                                    backgroundColor: '#ffd700',
                                                    borderColor: '#ddd',
                                                    borderBottomWidth: 0,
                                                    borderRadius: 30,
                                                    bottom: 0,
                                                    color: 'white',
                                                }}>
                                                <Text style={{
                                                    color: 'white', margin: 15, fontWeight: 'bold',
                                                    textAlign: 'center',
                                                    marginHorizontal: 30
                                                }}>Proceed</Text>
                                            </TouchableOpacity>
                                        </>

                            }

                            {/* <Text style={{fontSize: 15, marginTop: 10, color:'white'}}>{displayMsg}</Text> */}
                            <Image style={{ flex: 1, width: 320, marginTop: 10 }} source={require('../assets/dialog-wave@3.png')}></Image>
                        </View>



                    </View>
                </View>
            </Modal>
        </View>
    );
}