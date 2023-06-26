import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icontwo from 'react-native-vector-icons/FontAwesome';
import { Chip, Provider, Portal, Appbar, Divider, List, IconButton, RadioButton, Searchbar } from 'react-native-paper';

const data = [
    {

        "name": "Janvi Joshi",
        "image": require('../assets/letter-a.png'),
        "time": 'sent 1h ago',
    },
    {
        "name": "Unnati",
        "image": require('../assets/letter-a.png'),
        "time": 'seen 2 min ago',
    },
    {

        "name": "Jigesh Patel",
        "image": require('../assets/letter-a.png'),
        "time": 'Reacted to your message',
    },
    {

        "name": "Vivek Madaliya",
        "image": require('../assets/letter-a.png'),
        "time": 'sent 3h ago',
    },
    {

        "name": "Neha sharma",
        "image": require('../assets/letter-a.png'),
        "time": 'sent a reela video',
    },
    {

        "name": "Krishna",
        "image": require('../assets/letter-a.png'),
        "time": 'reacted to your message',
    },
    {

        "name": "Tushar Shrivastav",
        "image": require('../assets/letter-a.png'),
        "time": 'sent a reel video',
    },
    {

        "name": "Drashti",
        "image": require('../assets/letter-a.png'),
        "time": 'okay',
    },
    {

        "name": "Shivam",
        "image": require('../assets/letter-a.png'),
        "time": 'Hello',
    },

]
const Item = ({ item }) => (

    <View style={styles.mainView}>

        <View style={styles.firstView}>

            <Image style={styles.image} resizeMode={'contain'} source={item.image} />

            <View>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Text style={styles.textStyle2} >{item.time}</Text>
            </View>

        </View>

        <View style={styles.secondView}>
            <IconButton
                icon="camera"
                iconColor={'black'}
                size={30}
                onPress={() => console.log('Pressed')}
            />

        </View>
    </View>
);


const Inbox = ({ navigation }) => {
    const [search, setSearch] = useState('')
    const [finddata, setFinddata] = useState(data)

    const searchFun = (input) => {

        setSearch(input)
        var a = finddata.filter(word => word.name.match(input))

        console.log("Searching Data :", a)
        setFinddata(a)
    }


    return (
        <Provider>
            <Portal>
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => { navigation.navigate("AllScreens") }} />
                    <Appbar.Content title="riddhi_1708" style={{ alignItems: 'flex-start', justifyContent: 'center', color: 'black' }} />
                    <IconButton
                        icon="plus"
                        iconColor={'black'}
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />
                </Appbar.Header>
                <Searchbar
                    placeholder="Search"

                    style={styles.searchbar}
                    inputStyle={{ minHeight: 40 }}
                    onChangeText={() => searchFun(search)}

                />
                <FlatList
                    data={finddata}
                    horizontal={false}
                    renderItem={({ item }) => <Item item={item} />}

                />
                <StatusBar
                    hidden={false}
                />

            </Portal>
        </Provider>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    searchbar: {
        height: 40,
        width: '95%',
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginHorizontal: 10,
        // backgroundColor:'yellow'
    },
    mainView: {
        // borderWidth: 2,
        // borderColor: 'grey',
        marginHorizontal: 10,
        // padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderRadius: 25,
        // marginBottom: 10
    },
    firstView: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    textStyle: {
        fontSize: 15,
        // textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 10
    },
    textStyle2: {
        fontSize: 15,
        // textAlign: 'center',
        color: 'grey',
        // fontWeight: 'bold',
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
        width: 40,
        height: 40,
    },



});

export default Inbox;