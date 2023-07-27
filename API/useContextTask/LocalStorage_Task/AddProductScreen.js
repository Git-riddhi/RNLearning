import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

const AddProductScreen = (props) => {
    // Use states
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [address, setAddress] = useState("");

    // Function for store product data in localstorege
    const storeProductData = async () => {
        const productData = {
            Name: name,
            Id: id,
            Address: address,
        };
        console.log("productData===>", productData);

        try {
            const productDataArray = [productData];

            const oldProductData = await AsyncStorage.getItem("ProductKey");
            console.log('oldProductData', oldProductData);

            if (oldProductData !== null) {

                const loginshowItem = await AsyncStorage.getItem("Loginkey")
                const loginitem = JSON.parse(loginshowItem)
                console.log('loginitem user Id when product add===>', loginitem[0].userid);

                const userid = loginitem[0].userid
                productData.userid = userid
                console.log('productData ===>', productData);

                const oldData = JSON.parse(oldProductData);
                const newData = [...oldData, productData];

                console.log('newData', newData);

                await AsyncStorage.setItem("ProductKey", JSON.stringify(newData))

            } else {
                await AsyncStorage.setItem(
                    "ProductKey",
                    JSON.stringify(productDataArray)
                );
                props.route.params.refreshList();
            }
            props.navigation.navigate("Home");
            props.route.params.refreshList();
        } catch (err) {
            console.log("error ===>", err);
        }
    };

    useEffect(() => {
        if (props.route.params.item) {
            setName(props.route.params.item.Name);
            setId(props.route.params.item.Id);
            setAddress(props.route.params.item.Address);
        }
    }, []);


    // Function for update the data
    const getUpdateData = async () => {

        const updatedata = { Name: name, Id: id, Address: address }

        const getITemFromProductKey = await AsyncStorage.getItem('ProductKey')
        const itemInObject = JSON.parse(getITemFromProductKey)
        console.log('itemInObject', itemInObject);

        itemInObject.forEach((item, index) => {
            if (item.Id == updatedata.Id) {
                console.log('condition ');
                itemInObject[index] = updatedata
                console.log('updatdata', itemInObject[index]);
            }

        })
        console.log('updated itemInObject', itemInObject);
        await AsyncStorage.setItem('ProductKey', JSON.stringify(itemInObject))

        console.log('JSON.stringify(updatedata)', JSON.stringify(itemInObject))
        props.navigation.navigate('Home')
        props.route.params.refreshList();

    };

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
                        placeholder="Enter Id"
                        onChangeText={(id) => setId(id)}
                        style={styles.textInputStyle}
                        autoCapitalize="words"
                        placeholderTextColor="grey"
                        value={id}
                    />
                    <TextInput
                        placeholder="Enter Name"
                        onChangeText={(name) => setName(name)}
                        style={styles.textInputStyle}
                        autoCapitalize="words"
                        placeholderTextColor="grey"
                        value={name}
                    />
                    <TextInput
                        placeholder="Enter address"
                        numberOfLines={2}
                        onChangeText={(address) => setAddress(address)}
                        style={styles.textInputStyle}
                        autoCapitalize="words"
                        placeholderTextColor="grey"
                        value={address}
                    />

                    {props.route.params.item ? (
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => {
                                getUpdateData();
                            }}
                        >
                            <Text style={styles.submitButtonText}> UPDATE </Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => {
                                storeProductData();
                            }}
                        >
                            <Text style={styles.submitButtonText}> SUBMIT </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange",
    },
    ImageBackground: {
        flex: 1,
        justifyContent: "center",
    },
    heading: {
        color: "#1e90ff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 25,
    },
    image: {
        height: 50,
        width: 50,
        tintColor: "white",
    },
    firstView: {
        alignItems: "center",
        justifyContent: "center",
    },
    textInputStyle: {
        width: "80%",
        borderRadius: 20,
        backgroundColor: "#f0ffff",
        padding: 7,
        elevation: 5,
        marginTop: 30,
    },
    submitButton: {
        backgroundColor: "orange",
        padding: 10,
        marginTop: 50,
        borderRadius: 20,
    },
    submitButtonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
});
export default AddProductScreen;
