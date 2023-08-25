import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
    ScrollView,
    View,
    StyleSheet,
    Button,
    Image,
    Text,
    TextInput,
    Alert,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const LoginScreen = (props) => {

    // Use states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [checkEmail, setCheckEmail] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    const [isPasswordSecure, setIsPasswordSecure] = useState(true);

    const firstTextInput = useRef();


    // Validation Regex
    const mail = (email) => {
        var emailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        setEmail(email);
        if (emailRegex.test(email)) {
            setCheckEmail("");
        } else {
            setCheckEmail("Please Enter Valid Email address");
        }
    };

    const pwd = (password) => {
        var passRegex =
            /^.*(?=.{6,10})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?_~()-]*).*$/;
        setPassword(password);
        if (passRegex.test(password)) {
            setCheckPassword("");
        } else {
            setCheckPassword("Please Enter Valid Password");
        }
    };


    // Function for Validation
    const Login = () => {
        var isValid = true;

        if (email == "") {
            isValid = false;
            setCheckEmail("Email address is Required");
        } else {
            setCheckEmail("");
        }

        if (password == "") {
            isValid = false;
            setCheckPassword("Password is Required");
        } else {
            setCheckPassword("");
        }

        return isValid;
    };



    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/train1.jpg")}
                resizeMode="cover"
                style={styles.image}
            >

                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollviewStyle}>
                    <Text style={styles.mainheading}>RAILWAY TICKET BOOKING</Text>
                    <View style={styles.innercontainer}>
                        <TextInput
                            placeholder="Enter Email"
                            onChangeText={(email) => mail(email)}
                            style={styles.textInputStyle}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            returnKeyType={"next"}
                            value={email}
                            onSubmitEditing={() => {
                                firstTextInput.current.focus();
                            }}
                        />
                        {checkEmail ? (
                            <Text style={styles.checkText}>{checkEmail}</Text>
                        ) : (
                            <Text style={styles.checkText}></Text>
                        )}


                        <View style={styles.passwordInputView}>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="Enter Password"
                                secureTextEntry={isPasswordSecure}
                                onChangeText={(password) => pwd(password)}
                                returnKeyType={"done"}
                                value={password}
                                ref={firstTextInput}
                            />
                            <MaterialCommunityIcons
                                name={isPasswordSecure ? "eye-off" : "eye"}
                                size={24}
                                style={styles.eyeIconStyle}
                                color={"black"}
                                onPress={() => {
                                    isPasswordSecure
                                        ? setIsPasswordSecure(false)
                                        : setIsPasswordSecure(true);
                                }}
                            />
                        </View>
                        {checkPassword ? (
                            <Text style={styles.checkText}>{checkPassword}</Text>
                        ) : (
                            <Text style={styles.checkText}></Text>
                        )}
                    </View>
                    <View style={styles.Login}>
                        <TouchableOpacity  onPress={() => {
                            if (Login()) {
                                props.navigation.navigate('CitySelection')
                            }
                        }}>

                            <Text style={styles.LoginButtonText}> LOGIN </Text>

                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    scrollviewStyle: { flex: 1 },

    innercontainer: {
        alignItems: "center",

    },
    mainheading: {
        fontSize: 22,
        color: "black",
        alignSelf: "center",
        marginVertical: 90,
        fontWeight: "bold",
    },

    checkText: {
        color: "red",
        textAlign: "center",
    },

    textInputStyle: {
        borderRadius: 20,
        backgroundColor: "white",
        width: "80%",
        padding: 7,
        elevation: 5,
        marginHorizontal: 20,
        marginTop: 5,
        paddingLeft: 16

    },
    passwordInputView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        // marginBottom: 5,
    },
    eyeIconStyle: {
        position: "absolute",
        right: 50,
        bottom: 10
    },

    image: {
        flex: 1,
        justifyContent: "center",
    },

    Login: {
        borderRadius: 20,
        backgroundColor: "#dcdcdc",
        width: "80%",
        padding: 10,
        elevation: 6,
        marginHorizontal: 35,
        marginTop: 5,
    },
    LoginButtonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },

});

export default LoginScreen;
