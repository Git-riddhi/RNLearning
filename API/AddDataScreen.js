import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Modal, Button, Provider, ActivityIndicator } from 'react-native-paper';

const deviceWidth = Dimensions.get("screen").width
const deviceHeight = Dimensions.get("screen").height

const AddDataScreen = ({ navigation }) => {

    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [visible, setVisible] = useState(false);

  

    const getDataUsingGet = () => {
        //GET request
        fetch('https://crudcrud.com/api/c86005ad4088414c8145734c6335c9d1/unicorns', {
            method: 'GET',
            //Request Type
        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success
                // Alert.alert(JSON.stringify(responseJson));
                const data = responseJson
                setData(data)
                setIsLoading(false)
                setVisible(false)
                console.log("GET", responseJson);
            })
            //If response is not in json then in error
            .catch((error) => {
                //Error
                Alert.alert(JSON.stringify(error));
                console.error("error", error);
            });
    };


    const deleteData = (_id) => {

        var url = 'https://crudcrud.com/api/c86005ad4088414c8145734c6335c9d1/unicorns';

        // console.log('_id', typeof _id);
        fetch(url + '/' + _id, {
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
        }).then((response) => JSON.stringify(response.json()))
            .then((response) => (
                console.log('deleteresponse', response),
                getDataUsingGet(),
                setIsLoading(false),
                setVisible(false),
                console.log('delete', response)
            )
            )
            .catch((error) => {
                console.error('error', error);
            });
    }

    const updateData = (item) => {
        props.navigation.navigate('Input', { item, updateEvent: updateEvent })

    }

    const ShowData = () => {
        setIsLoading(false)
        getDataUsingGet()
    }

    useEffect(() => {
        setVisible(true)
        setIsLoading(true)
        getDataUsingGet();
    }, []);

    const Item = ({ item, index }) => (
        // console.log("item-name :",item.Name),
        <View style={styles.mainView}>
            <View>
                <Text style={styles.textStyle}> Name : {item.Name}</Text>
                <Text style={styles.textStyle}> Age : {item.Age}</Text>
                <Text style={styles.textStyle}> Designation : {item.Designation}</Text>
            </View>

            <View style={styles.iconViewstyle}>
                <TouchableOpacity onPress={() => { updateData(item) }} >
                    <Image
                        style={styles.iconStyle}
                        source={require('../assets/edit.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { deleteData(item._id) }} >
                    <Image
                        style={styles.iconStyle}
                        source={require('../assets/delete.png')}
                    />
                </TouchableOpacity>


            </View>

        </View>
    );


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Show Data</Text>
            <View style={styles.firstView}>

                <Text style={styles.textInputStyle}>ADD</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Input", { ShowData })}>
                    <Image style={styles.image} resizeMode={'contain'} source={require('../assets/add.png')} />
                </TouchableOpacity>

            </View>

            <FlatList
                data={data}
                renderItem={({ item, index }) => <Item item={item} index={index} />}
                ItemSeparatorComponent={<View style={{ width: 10, height: 10 }} />}
            />

            <Modal visible={visible} AnimationType='fade' transparent={true}>
                <ActivityIndicator animating={true} color={'white'} size={20} />
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1A3C',
    },
    heading: {
        color: '#fff',
        fontSize: 25,
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 25,
    },
    image: {
        height: 50,
        width: 50,
        tintColor: 'white'
    },
    firstView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10

    },
    textInputStyle: {
        width: '50%',
        height: 40,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 20,
        borderRadius: 20,
        textAlign: "center",
        backgroundColor: '#f0ffff',
        padding: 7,
        elevation: 5,
        marginRight: 20,
        marginVertical: 10
    },

    mainView: {
        borderWidth: 2,
        borderColor: 'grey',
        marginHorizontal: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    textStyle: {
        fontSize: 15,
        color: 'white'

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

    scrollView: {
        marginBottom: 70,
    },
    taskContainer: {
        marginTop: 20,
    },
    iconViewstyle: {
        width: deviceWidth / 2,
        height: deviceHeight / 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    iconStyle: {
        height: 40,
        width: 40,
        marginHorizontal: 20
    },

});
export default AddDataScreen;
