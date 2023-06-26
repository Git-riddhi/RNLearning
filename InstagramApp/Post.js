import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';


// const screenWidth = Dimensions.get('screen').width
// const screenHeight = Dimensions.get('screen').height

// const data = [
//     {
//         image: require('../assets/img11.jpeg'),
//         name: 'Riddhi',
//         caption: 'no needed caption.',
//         likesCount: 1234,
//         postedAt: '6 minutes ago'
//     },
//     {
//         image: require('../assets/img12.jpeg'),
//         name: 'Jhanvi'
//     },
//     {
//         image: require('../assets/img13.jpeg'),
//         name: 'Neha'
//     },
//     {
//         image: require('../assets/img14.jpeg'),
//         name: 'Krishna'
//     },
// ]

// const Item = ({ item }) => (
//     <View style={styles.mainView}>

//         <View style={styles.firstView}>

//             <Image style={styles.image} resizeMode={'contain'} source={item.src} />

//             <View>
//                 <Text style={styles.textStyle}>{item.name}</Text>
//                 <Text style={styles.textStyle2} >{item.number}</Text>
//             </View>

//         </View>

//         <View style={styles.secondView}>
//             <TouchableOpacity>
//                 <Text style={styles.textStyle3}>{item.status}</Text>
//             </TouchableOpacity>
//         </View>
//     </View>
// );


const Post = () => {

    return (
        <View style={styles.profileView}>
            <Text>Post</Text>
            {/* <View style={styles.postView}>
            <Image style={styles.img} source={require('../assets/img10.jpeg')}
                resizeMode='cover' />
            <Text style={styles.userName}>
                unni_7
            </Text>
            <Icon name='dots-three-vertical' size={15} color='black' />
            </View>
            <View>
            <Image style={styles.image} source={require('../assets/img10.jpeg')}
                resizeMode='cover' />
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Post image={item.image} name={item.name} />}
            /> */}
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
        // marginHorizontal: 15,

    },
    profileView: {
        width: "100%",
        height: "100%",
        // flexDirection:'row'


    },
    postView: {
        flexDirection: 'row'
    },
    userName: {
        fontSize: 15,
        color: 'black'
    },
    img: {
        height: 70,
        width: 70,
        borderWidth: 2,
        borderColor: '#c13584',
        margin: 5,
        borderRadius: 50
    },
    // mainView: {
    //     borderWidth: 2,
    //     borderColor: 'grey',
    //     paddingTop: 10,
    //     margin: 5,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     elevation: 5,
    //     borderRadius: 20,
    //     marginBottom: 10,
    //     backgroundColor: '#e9967a',
    //     width: screenWidth / 2 - 10,
    //     height: screenHeight / 3,
    //     overflow: 'hidden',

    // },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 10
    },
    textStyle2: {
        fontSize: 20,
        textAlign: 'center',
        color: 'grey',
        fontWeight: 'bold',
        marginLeft: 10
    },
    textStyle3: {
        fontSize: 20,
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 10
    },

    image: {
        height: 100,
        width: '80%'
        // marginTop: 20,
        // flexWrap: 'wrap',
        // borderRadius: 20,
        // backgroundColor: 'white'

    },


});

export default Post;