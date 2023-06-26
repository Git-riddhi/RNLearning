import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, StatusBar, ScrollView, Image } from 'react-native';


const Stories = () => {


    return (


        <View >

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>

                <View style={styles.imagestyle} >
                    <View style={styles.imageText}>
                        <Image source={require('../assets/img10.jpeg')} style={styles.img} />
                        <Text style={styles.text}>Your Story</Text>
                    </View>

                    <View style={styles.imageText}>
                        <Image source={require('../assets/img9.jpeg')} style={styles.img} />
                        <Text style={styles.text}>unni_7</Text>
                    </View>

                    <View style={styles.imageText}>
                        <Image source={require('../assets/img8.jpeg')} style={styles.img} />
                        <Text style={styles.text}>jahan_17</Text>
                    </View>

                    <View style={styles.imageText}>
                        <Image source={require('../assets/img13.jpeg')} style={styles.img} />
                        <Text style={styles.text}>vivek_20</Text>
                    </View>

                    <View style={styles.imageText}>
                        <Image source={require('../assets/img11.jpeg')} style={styles.img} />
                        <Text style={styles.text}>neha_sharma</Text>
                    </View>

                    <View style={styles.imageText}>
                        <Image source={require('../assets/img12.jpeg')} style={styles.img} />
                        <Text style={styles.text}>Mr.patel</Text>
                    </View>

                    <View style={styles.imageText}>
                        <Image source={require('../assets/img14.jpeg')} style={styles.img} />
                        <Text style={styles.text}>jigz_11</Text>
                    </View>

                    <View style={styles.imageText}>
                        <Image source={require('../assets/img4.jpeg')} style={styles.img} />
                        <Text style={styles.text}>viru_1999</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollview: {
        paddingVertical: 20,
    },
    imagestyle: {
        flexDirection: 'row',
        borderRadius: 50
    },
    imageText: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize:12

    },
    img: {
        height: 70,
        width: 70,
        borderWidth: 2,
        borderColor: '#c13584',
        margin: 5,
        borderRadius: 50
    }


});
export default Stories;