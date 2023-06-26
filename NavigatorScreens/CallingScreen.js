import * as React from 'react';
import { View, Linking, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CallingScreen = (props) => {
    const item = props.route.params.item
    // console.log("route",props)
    return (

        <View style={styles.container}>
            <View>
                <Image style={styles.image} resizeMode={'contain'} source={item.src} />
            </View>
            
            <View>
                <Text style={styles.textstyle}>{item.name}</Text>
                <Text style={styles.textstyle}>{item.number}</Text>
                <Text style={styles.textstyle2}>Calling...</Text>

                <TouchableOpacity
                    onPress={() => { Linking.openURL(`tel:${item.number}`) }}
                // onPress={() => { props.navigation.navigate("Contacts")}}

                >
                    <Image style={styles.image2} resizeMode={'contain'} source={require('../assets/cut.png')} />
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#e6e6fa"
    },
    image: {
        height: 100,
        width: 100
    },
    image2: {
        height: 60,
        width: 60,
        alignSelf: 'center',
        marginVertical: 70
    },
    textstyle: {
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        alignSelf: 'center',
        marginTop: 10
    },
    textstyle2: {
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: 'center',
        marginVertical: 30,
        color: 'green'
    }
})



export default CallingScreen;