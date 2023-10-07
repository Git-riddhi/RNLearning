import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { BackHandler, Dimensions, ImageBackground } from "react-native";
import {
    View,
    StyleSheet,
    Text,
    Alert,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";

const deviceWidth = Dimensions.get("screen").width;
const deviceheight = Dimensions.get("screen").height;

const Home = (props) => {
    // states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [image, setImage] = useState();

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, []);


    const handleBackButtonClick = () => {
        props.navigation.pop(2)
    }

    useFocusEffect(
        React.useCallback(() => {
            getFirstNameFromSignup();
        }, []));


    // Function for get firstname from Loginkey of asyncstorage
    const getFirstNameFromSignup = async () => {
        try {
            const showItem = await AsyncStorage.getItem("Loginkey");
            console.log('login showItem===', showItem);

            if (showItem !== null) {
                const result = JSON.parse(showItem);
                setFirstName(result[0].firstName);
                setLastName(result[0].lastName)
                setImage(result[0].image)
                return showItem;
            }
        } catch (error) {
            console.log("error ===>", error);
        }
    };

    // Function for Logout
    const LogOut = async () => {
        try {
            props.navigation.navigate("Login");
            await AsyncStorage.removeItem("Loginkey");
            // await AsyncStorage.clear();
            console.log("Log out successfully");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/background.png")}
                resizeMode="cover"
                style={styles.ImageBackground}
            >
                <View style={styles.firstView}>
                    <View>
                        <Text style={styles.heading}>Hello,</Text>
                        <Text style={styles.heading}>{firstName} {lastName}</Text>
                    </View>
                    <Image source={{ uri: image }} style={styles.profileImageStyle} />
                </View>

                <TouchableOpacity
                    style={styles.logoutView}
                    onPress={() => {
                        LogOut();
                    }}
                >
                    <Text style={styles.logoutButtonStyle}>Log Out</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ImageBackground: {
        flex: 1,
    },
    heading: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },
    image: {
        height: 35,
        width: 35,
        tintColor: "white",
    },
    iconViewstyle: {
        width: deviceWidth / 2,
        height: deviceheight / 10,
        flexDirection: "row",
        alignItems: "center",
    },
    iconStyle: {
        height: 40,
        width: 40,
        marginHorizontal: 20,
    },
    firstView: {
        justifyContent: "space-between",
        margin: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImageStyle: {
        width: 60,
        height: 60,
        marginTop: 10,
        borderRadius: 30
    },
    logoutView: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    logoutButtonStyle: {
        width: "30%",
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        borderRadius: 20,
        alignSelf: "center",
        textAlign: "center",
        backgroundColor: "orange",
        padding: 7,
        elevation: 5,
        marginVertical: 20,
    },
    mainView: {
        width: deviceWidth,
        borderWidth: 3,
        borderColor: "grey",
        padding: 10,
        flexDirection: "row",
    },
    textStyle: {
        fontSize: 15,
        color: "black",
        width: deviceWidth / 2,
    },
    addButton: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        borderRadius: 20,
        backgroundColor: "#f0ffff",
        padding: 7,
        height: 40,
        width: 50,
        textAlign: "center",
    },
});
export default Home;
