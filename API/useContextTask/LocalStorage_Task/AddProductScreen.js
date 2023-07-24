import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { event } from 'react-native-reanimated';

// const deviceWidth = Dimensions.get("screen").width
// const deviceHeight = Dimensions.get("screen").height

const AddProductScreen = (props) => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [address, setAddress] = useState('')

    const storeProductData = async () => {

        const productData = {
            'Name': name, 'ID': id, 'Address': address
        }
        console.log('productData===>', productData);

        try {
            const productDataArray = [productData]

            const oldProductData = await AsyncStorage.getItem('ProductKey')

            const oldData = JSON.parse(oldProductData)
            console.log("oldProductData======", oldData)
            if (oldData !== null) {
                const newData =  [...oldData,...productDataArray]
                console.log("newDataArray======",newData)
                await AsyncStorage.setItem('ProductKey', JSON.stringify(newData))
                props.navigation.navigate('Home')
                props.route.params.refreshList(newData)

            } else {
                await AsyncStorage.setItem("ProductKey", JSON.stringify(productDataArray));
                props.navigation.navigate('Home')
            }

        } catch (err) {
            console.log('error ===>', err);
        }
    };

    useEffect(() => {
        if (
            props.route.params.item) {
            // console.log("previous item", props.route.params.item)
            setName(props.route.params.item.Name)
            // console.log("previous item's name :", props.route.params.item.Name)
            setId(props.route.params.item.ID)
            setAddress(props.route.params.item.Address)

        }

    }, [])



    const getUpdateData = () => {
        let updatedata = { 'Name': name, 'ID': id, 'Address':address }
        props.route.params.updateEvent(updatedata)

        props.navigation.goBack()

        console.log("updated data :", updatedata)
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/bg.png")}
                resizeMode="cover"
                style={styles.ImageBackground}
            >
                <Text style={styles.heading}>ADD ITEMS</Text>
                <View style={styles.firstView}>

                    <TextInput
                        placeholder="Enter ID"
                        onChangeText={(id) => setId(id)}
                        style={styles.textInputStyle}
                        autoCapitalize="words"
                        placeholderTextColor='grey'
                        value={id}

                    />
                    <TextInput
                        placeholder="Enter Name"
                        onChangeText={(name) => setName(name)}
                        style={styles.textInputStyle}
                        autoCapitalize="words"
                        placeholderTextColor='grey'
                        value={name}
                    />
                    <TextInput
                        placeholder="Enter address"
                        numberOfLines={2}
                        onChangeText={(address) => setAddress(address)}
                        style={styles.textInputStyle}
                        autoCapitalize="words"
                        placeholderTextColor='grey'
                        value={address}
                    />

                    {/* <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => { storeProductData() }}>
                        <Text style={styles.submitButtonText}> SUBMIT </Text>
                    </TouchableOpacity> */}


                    {props.route.params.item
                        ? <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => { getUpdateData() }}>
                            <Text style={styles.submitButtonText}> UPDATE </Text>
                        </TouchableOpacity>
                        : <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => { storeProductData() }}>
                            <Text style={styles.submitButtonText}> SUBMIT </Text>
                        </TouchableOpacity>
                    }
                </View>
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
        textAlign: 'center',
        fontWeight: 'bold',
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputStyle: {
        width: '80%',
        borderRadius: 20,
        backgroundColor: '#f0ffff',
        padding: 7,
        elevation: 5,
        // marginRight: 20,
        marginTop: 30
    },
    submitButton: {
        backgroundColor: 'orange',
        padding: 10,
        marginTop: 50,
        borderRadius: 20,
    },
    submitButtonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
export default AddProductScreen;