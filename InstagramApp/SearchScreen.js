import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    SectionList,
    Image,
    TextInput,
    Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height



const categories = [
    {
        "src": require("../assets/img1.jpeg"),
    },
    {
        "src": require("../assets/img2.jpeg"),
    },
    {
        "src": require("../assets/img12.jpeg"),
    },
    {
        "src": require("../assets/img13.jpeg"),
    },
    {
        "src": require("../assets/img9.jpeg"),
    },
    {
        "src": require("../assets/img8.jpeg"),
    },

    {
        "src": require("../assets/img7.jpeg"),
    },
    {
        "src": require("../assets/img10.jpeg"),
    },
    {
        "src": require("../assets/img11.jpeg"),
    },
    {
        "src": require("../assets/img3.jpeg"),
    },
    {
        "src": require("../assets/img4.jpeg"),
    },
    {
        "src": require("../assets/img5.jpeg"),
    },
    {
        "src": require("../assets/img6.jpeg"),
    },
    {
        "src": require("../assets/img14.jpeg"),
    },
    {
        "src": require("../assets/img14.jpeg"),
    },


]

const Item = ({ item }) => (
    <View style={[styles.mainView, { backgroundColor: item.color }]} >

        <View style={styles.firstView}>
            {/* <Text
                style={styles.textStyle}>{item.title}
            </Text> */}
            <Image style={styles.image} source={item.src}
                resizeMode='cover' />
        </View>

    </View>
);

const SearchScreen = () => {

    const [search, setSearch] = useState('')
    const [result, setResult] = useState(categories)

    // console.log("search", search)

    const searchFun = (input) => {

        setSearch(input)
        var a = categories.filter(word => word.title.match(input))
        // console.log(a)
        setResult(a)

    }

    return (

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
            <FlatList
                data={result}
                horizontal={false}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.title}
                numColumns={2}
            // ItemSeparatorComponent={<View style={{ width: 10, height: 10 }} />} 
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 15,

    },
    searchView: {
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: 'grey',
        width: "95%",
        height: 40,
    },
    Image1Style: {
        padding: 10,
        margin: 7,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    textInputStyle: {
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 7,
        margin: 10,
        elevation: 3,
        width: "80%"
    },
    mainView: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth / 2,
        height: screenHeight / 4,
        overflow: 'hidden',
    },


    image: {
        flex: 1,
        width: (screenWidth * 0.5) - 10,
        // marginTop: 20,
        // flexWrap: 'wrap',
        // borderRadius: 20,
        // backgroundColor: 'white'
    },



});

export default SearchScreen;