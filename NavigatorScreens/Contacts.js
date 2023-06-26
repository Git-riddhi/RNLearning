import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image, TextInput, TouchableOpacity
} from 'react-native';
import CallingScreen from './CallingScreen';


const contactListing = [
    {
        "src": require('../assets/letter-a.png'),
        "name": "Anuj",
        "number": "8596457895",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-a.png'),
        "name": "Aman",
        "number": "9596677895",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-a.png'),
        "name": "Amit",
        "number": "8896487895",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-a.png'),
        "name": "Ahan",
        "number": "7759685785",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-a.png'),
        "name": "Anisha",
        "number": "9996457898",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-a.png'),
        "name": "Abhishek",
        "number": "8156584054",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-a.png'),
        "name": "Anshita",
        "number": "9897546890",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-a.png'),
        "name": "Ashwini",
        "number": "9028965478",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-j.png'),
        "name": "Jigesh",
        "number": "87987459856",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-j.png'),
        "name": "Jhanavi",
        "number": "9786548902",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-j.png'),
        "name": "Jiyan",
        "number": "8154895648",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-k.png'),
        "name": "Krishna",
        "number": "9998745652",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-m.png'),
        "name": "Mohit",
        "number": "7778546982",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-m.png'),
        "name": "Manik",
        "number": "8254690255",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-m.png'),
        "name": "Meshwa",
        "number": "9099874562",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-m.png'),
        "name": "Misa",
        "number": "7798420304",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-n.png'),
        "name": "Nishwa",
        "number": "9662145879",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-n.png'),
        "name": "Nirala",
        "number": "8200649783",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-n.png'),
        "name": "Neha",
        "number": "7254897645",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-r.png'),
        "name": "Rihan",
        "number": "8007965827",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-r.png'),
        "name": "Riddhi",
        "number": "8154999054",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-r.png'),
        "name": "Rohit",
        "number": "9995468754",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-r.png'),
        "name": "Richa",
        "number": "8795462612",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-s.png'),
        "name": "Sahil",
        "number": "8897546218",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-s.png'),
        "name": "Shubham",
        "number": "8420016579",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-s.png'),
        "name": "Shivani",
        "number": "9458726908",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-s.png'),
        "name": "Shivam",
        "number": "9956487563",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-s.png'),
        "name": "Saurav",
        "number": "8120889785",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-t.png'),
        "name": "Tushar",
        "number": "7895648209",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-u.png'),
        "name": "Unnati",
        "number": "9662154897",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-v.png'),
        "name": "Viral",
        "number": "7789564254",
        "status": "Call"
    },
    {
        "src": require('../assets/letter-v.png'),
        "name": "Vivek",
        "number": "9898457896",
        "status": "Call"
    },

]

const Item = ({ item, onPress }) => (
    <View style={styles.mainView}>

        <View style={styles.firstView}>

            <Image style={styles.image} resizeMode={'contain'} source={item.src} />

            <View>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Text style={styles.textStyle2} >{item.number}</Text>
            </View>

        </View>

        <View style={styles.secondView}>
            <TouchableOpacity onPress={() => { onPress() }}>
                <Text style={styles.textStyle3}>{item.status}</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const ContactScreen = ({ navigation }) => {
    const [search, setSearch] = useState('')
    const [contactList, setContactList] = useState(contactListing)

    const searchFun = (input) => {

        setSearch(input)
        var a = contactListing.filter(word => word.name.match(input) || word.number.match(input))

        // console.log("Searching Data :", a)
        setContactList(a)

    }


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.search_View}>
                <View style={styles.searchView}>
                    <Image
                        source={require('../assets/download(1).png')}
                        style={styles.Image1Style}
                    />

                    <TextInput
                        placeholder='Search'
                        onChangeText={(search) => searchFun(search)}
                        value={search}
                    />
                </View>

                <Image
                    source={require('../assets/user.png')}
                    style={styles.Image2Style}
                />

            </View>

            <View style={styles.headerView}>
                <Text style={styles.headerText}>Contact List</Text>
            </View>

            <FlatList
                data={contactList}
                horizontal={false}
                // numColumns={1}
                renderItem={({ item }) => <Item item={item} onPress={() => {
                    navigation.navigate("Calling", {
                        item: item
                    })
                }} />}
                keyExtractor={item => item.id}
            // numColumns={1}
            // ItemSeparatorComponent={<View style={{ width: 10, height: 10 }} />}
            />
            <StatusBar
                hidden={false}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchView: {
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 30,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: 'grey',
        width: "80%",
        height: 40,
    },
    search_View: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    Image1Style: {
        padding: 10,
        margin: 7,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    Image2Style: {
        marginHorizontal: 10,
        padding: 10,
        margin: 5,
        height: 30,
        width: 30,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    mainView: {
        borderWidth: 2,
        borderColor: 'grey',
        marginHorizontal: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 25,
        marginBottom: 10
    },
    headerText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        width: '100%',
    },
    firstView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
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
    headerView: {
        marginHorizontal: 10,
        height: 40,
    },
    image: {
        width: 40,
        height: 40,
    },
});

export default ContactScreen;
