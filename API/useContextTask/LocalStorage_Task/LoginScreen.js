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

const LoginScreen = (props) => {

    // Use states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [checkEmail, setCheckEmail] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

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


    // Function for get data from Registerkey of asyncstorage
    const getData = async () => {
        const showItem = await AsyncStorage.getItem("Registerkey");
        const getItem = JSON.parse(showItem);

        console.log("registeritem get data ==", getItem);

        if (getItem == null) {
            Alert.alert("Please register yourself first.");
            setEmail("");
            setPassword("");
        }

        // const emails = getItem.map((dataobj) => dataobj.email)
        // console.log(emails,"emails array")

        const loginObj = {
            email: email,
            password: password,
        };
        console.log("loginObj.email ===>", loginObj.email);

        const existingEmail = getItem.filter((item) => {
            const oldEmail = item.email;
            const oldPassword = item.password;

            console.log(oldEmail, oldPassword, "=======> oldEmail, oldPassword");

            if (oldEmail == loginObj.email && oldPassword == loginObj.password) {
                console.log("condition true");

                return item;
            }
        });

        console.log("existingEmail ===>", existingEmail);

        if (existingEmail.length !== 0) {
            await AsyncStorage.setItem("Loginkey", JSON.stringify(existingEmail));

            props.navigation.navigate("Home");
            setEmail("");
            setPassword("");
        } else {
            Alert.alert("Invalid data.");
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/bg.png")}
                resizeMode="cover"
                style={styles.image}
            >
                <Text style={styles.headertext}>LogIn </Text>

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

                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        onChangeText={(password) => pwd(password)}
                        returnKeyType={"done"}
                        value={password}
                        ref={firstTextInput}
                    />
                    {checkPassword ? (
                        <Text style={styles.checkText}>{checkPassword}</Text>
                    ) : (
                        <Text style={styles.checkText}></Text>
                    )}
                </View>

                <View style={styles.Login}>
                    <Text style={styles.LoginButtonText}> LogIn </Text>

                    <TouchableOpacity
                        onPress={() => {
                            if (Login()) {
                                getData();
                            }
                        }}
                        style={styles.aerrowTouch}
                    >
                        <Image
                            source={require("../../../assets/right-arrow.png")}
                            style={styles.rightAerrowButton}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.SignUp}>
                    <Text style={styles.footerText}>Or create account</Text>
                    <Text style={styles.LoginButtonText}> SignUp </Text>

                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("SignUp");
                        }}
                        style={styles.aerrowTouch}
                    >
                        <Image
                            source={require("../../../assets/right-arrow.png")}
                            style={styles.rightAerrowButton}
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },

    innercontainer: {
        alignItems: "center",
    },
    headertext: {
        fontWeight: "bold",
        fontSize: 25,
        color: "black",
        alignSelf: "center",
        marginVertical: 40,
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
    },

    image: {
        flex: 1,
        justifyContent: "center",
    },

    LoginButtonText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },

    Login: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        margin: 20,
    },
    SignUp: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        margin: 20,
    },

    aerrowTouch: {
        backgroundColor: "orange",
        padding: 7,
        borderRadius: 20,
        marginRight: 20,
    },

    rightAerrowButton: {
        height: 30,
        width: 30,
        tintColor: "white",
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },

    footerText: {
        fontSize: 15,
        color: "orange",
        alignSelf: "center",
        fontWeight: "bold",
        margin: 10,
    },
});

export default LoginScreen;
