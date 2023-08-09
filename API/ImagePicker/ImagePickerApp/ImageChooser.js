import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ImageChooser = (props) => {

    // useEffect(() => {
    //     getData()
    // }, [])

    // const getData = async () => {
    //     const getItem = await AsyncStorage.getItem('draftImage')
    //     console.log("splash get item login key  ==else==>", getItem);

    //     if (getItem === null) {
    //         console.log("yes null");
    //         setTimeout(() => {
    //             props.navigation.navigate("ImageChooser")
    //         }, 1000);
    //     }
    //     else {
    //         setTimeout(() => {
    //             props.navigation.navigate("ImageSelection")
    //         }, 1000);
    //     }
    // };

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

            <Text style={{ color: "black", fontWeight: "600", textAlign: "center", fontSize: 30 }}>You can Select Images From Here.</Text>

            <Pressable
                onPress={() => props.navigation.navigate("ImageSelection")}
                style={{
                    backgroundColor: "green",
                    padding: 14,
                    width: 120,
                    borderRadius: 25,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 30,
                }}
            >
                <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Go To ImagePicker</Text>
            </Pressable>
        </View>
    );
};

export default ImageChooser;

const styles = StyleSheet.create({});