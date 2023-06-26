import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';


const LoginScreen = ({ navigation }) => {
    const onPress = (msg) => {
        //For generating alert on button click.
        alert('Alert for: ' + msg);
    };

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')

    // console.log(name)
    const thirdTextInput = useRef()

    return (
        <ScrollView>

            <Text style={styles.text}>Login Form</Text>
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter Name"
                    onChangeText={(name) => setName(name)}
                    // value={inputValue}
                    style={styles.textInputStyle}
                    autoCapitalize="words"
                    returnKeyType={'next'}
                    // autoFocus={true}
                    onSubmitEditing={() => { firstTextInput.focus(); }}
                />

                <TextInput
                    placeholder="Enter Number"
                    onChangeText={(number) => setNumber(number)}
                    style={styles.textInputStyle}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    placeholderTextColor='grey'
                    underlineColorAndroid="transparent"
                    // returnKeyType={'next'}
                    ref={(input) => { firstTextInput = input; }}
                    onSubmitEditing={() => { secondTextInput.focus(); }}
                />

                <TextInput
                    placeholder="Enter Email"
                    onChangeText={(email) => setEmail(email)}
                    style={styles.textInputStyle}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    // returnKeyType={'next'}
                    ref={(input) => { secondTextInput = input; }}
                    onSubmitEditing={() => { thirdTextInput.focus(); }}
                />

                <TextInput style={styles.textInputStyle}
                    placeholder='Enter Password'
                    autoFocus={false}
                    multiline={false}
                    secureTextEntry={true}
                    editable={true}
                    onChangeText={(password) => setPassword(password)}
                    returnKeyType={'next'}
                    ref={thirdTextInput}
                    onSubmitEditing={() => { fourthTextInput.focus(); }}
                />

                <TextInput style={styles.textInputStyle}
                    placeholder='Enter Address'
                    multiline={true}
                    editable={true}
                    onChangeText={(address) => setAddress(address)}
                    numberOfLines={3}
                    autoCapitalize='characters'
                    returnKeyType={'done'}
                // ref={(input) => { fourthTextInput = input; }}
                />

                {/* <Button title="TextInput" onPress={() => textInput} /> */}

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => navigation.navigate("LoginData", {
                        name: name,
                        number: number,
                        email: email,
                        password: password,
                        address: address
                    })}
                >
                    <Text style={styles.submitButtonText}> SUBMIT </Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        borderColor: 'black',
        alignSelf: 'center',
        padding: 10,
    },
    textInputStyle: {
        height: 50,
        width: 300,
        marginBottom: 10,
        borderWidth: 2,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    submitButton: {
        backgroundColor: 'grey',
        padding: 10,
        margin: 10,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }

});

export default LoginScreen;