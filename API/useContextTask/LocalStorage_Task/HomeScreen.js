import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Button, Dimensions, ImageBackground, } from 'react-native';
import { View, StyleSheet, Text, Alert, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

const deviceWidth = Dimensions.get("screen").width
const deviceheight = Dimensions.get("screen").height

const HomeScreen = (props) => {
    const [output, setOutput] = useState([])
    const [refresh, setRefresh] = useState(false)
    // console.log('output', output);

    useEffect(() => {
        getProductData()
    }, [refresh])

    const refreshList = () => {
        console.log("function call =====")
        setRefresh(true)
    }
    // useEffect(()=>{
    //     console.log(output,"updated output")
    // },[output])

    const getProductData = async () => {

        const showItem = await AsyncStorage.getItem("ProductKey");
        const getItem = JSON.parse(showItem)
        console.log('Homepage getItem ===>', getItem);

        // const array =output

        // array.push(item)
        setOutput(getItem)
        setRefresh(false)
    }





    const event = (item) => {

        console.log('item', item)

        const array = [...output]
        array.push(item)
        setOutput(array)

    }

    const updateEvent = (updatedata) => {

        const updatedArray = [...output]
        console.log(output, 'output array')

        updatedArray.forEach((item, index) => {
            if (item.ID == updatedata.ID) {
                updatedArray[index] = updatedata
            }

            setOutput(updatedArray)
        })
    }

    const deleteTask = (index) => {
        Alert.alert(
            "Are You Sure ?",
            "You want to delete ?",
            [
                {
                    text: 'Yes', onPress: () => {
                        const array = [...output]
                        // console.log("array :", array)
                        const deletedarray = array.splice(index, 1)
                        // console.log("deletearray :", deletedarray)
                        AsyncStorage.removeItem('ProductKey')
                        setOutput(array)
                    }
                },
                { text: 'No', onPress: () => console.log('Okay'), style: 'cancel' },
            ]
        );
    }

    const editTask = (item) => {
        props.navigation.navigate('AddProduct', { item, updateEvent: updateEvent })

    }

    const Item = ({ item, index }) => (
        // console.log("item-name :",item.Name),
        <View style={styles.mainView}>

            <View>
                <Text style={styles.textStyle}> ID : {item.ID}</Text>
                <Text style={styles.textStyle}> Name : {item.Name}</Text>
                <Text style={styles.textStyle}> Task : {item.Task}</Text>
                <Text style={styles.textStyle}> Task Id : {item.TaskId}</Text>
            </View>

            <View style={styles.iconViewstyle}>
                <TouchableOpacity onPress={() => { editTask(item) }} >
                    <Image
                        style={styles.iconStyle}
                        source={require('../../../assets/edit.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { deleteTask(index) }} >
                    <Image
                        style={styles.iconStyle}
                        source={require('../../../assets/delete.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>

    );

    const LogOut = async () => {

        try {
            await AsyncStorage.clear();
            // setEmail('')
            // setPassword('')
            props.navigation.navigate("Login")

            console.log('Log out successfully');
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <View style={styles.container}>

            <ImageBackground
                source={require("../../../assets/bg.png")}
                resizeMode="cover"
                style={styles.ImageBackground}
            >
                <View style={styles.firstView}>
                    <Text style={styles.heading}>Products</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("AddProduct",
                        { event: event,
                            // refreshFun:refreshList 
                        }
                    )}>
                        <Image style={styles.image} resizeMode={'contain'} source={require('../../../assets/add.png')} />
                    </TouchableOpacity>

                </View>

                <FlatList
                    data={output}
                    renderItem={({ item, index }) => <Item item={item} index={index} />}
                    ItemSeparatorComponent={<View style={{ width: 10, height: 10 }} />}
                />

                <TouchableOpacity onPress={() => { LogOut() }}>
                    <Text style={styles.logoutButtonStyle}>Log Out</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    ImageBackground: {
        flex: 1,
        justifyContent: "center",
    },
    heading: {
        color: '#1e90ff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    image: {
        height: 35,
        width: 35,
        tintColor: 'white'
    },
    iconViewstyle: {
        width: deviceWidth / 2,
        height: deviceheight / 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        height: 40,
        width: 40,
        marginHorizontal: 20
    },
    firstView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 30
    },
    logoutButtonStyle: {
        width: '30%',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 20,
        alignSelf: 'center',
        textAlign: "center",
        backgroundColor: 'orange',
        padding: 7,
        elevation: 5,
        marginVertical: 20
    },
    mainView: {
        width: deviceWidth,
        borderWidth: 3,
        borderColor: 'grey',
        padding: 10,
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 15,
        color: 'black',
        width: deviceWidth / 2
    },
    addButton: {
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        borderRadius: 20,
        backgroundColor: '#f0ffff',
        padding: 7,
        height: 40,
        width: 50,
        textAlign: 'center'
    },

});
export default HomeScreen;