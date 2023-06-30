import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {

    const [name, setName] = useState(null);
    const [number, setNumber] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const [checked, setChecked] = React.useState(false);
    const [uncheckbox, setUncheckbox] = useState({})

    const user_details = {
        Name: name,
        Number: number,
        Email: email,
        Password: password,

        // name: 'Riddhi',
        // number: '9099548190',
        // email: 'rp123@gmail.com',
        // password: 'rpatel_123'
        // age: 24,
    };

    const check = { CheckStatus: checked }

    const setCheckbox = async (check) => {
        try {
            const jsonValue = JSON.stringify(check)
            await AsyncStorage.setItem('check', jsonValue)
            console.log("check", jsonValue)
        } catch (e) {
            // saving error
            console.log("error", e);
        }
        // setChecked('')

    };

    const setData = async (user_details) => {
        try {
            const jsonValue = JSON.stringify(user_details)
            await AsyncStorage.setItem('user_details', jsonValue)
            console.log(jsonValue)
        } catch (e) {
            // saving error
            console.log("error", e);
        }
        setName('')
        setEmail('')
        setPassword('')
        setNumber('')
        // AsyncStorage.setItem("name", "S.G.");
        // AsyncStorage.setItem("age", JSON.stringify(24))
        // AsyncStorage.setItem('user_details', JSON.stringify(user_details));
    };

    const getcheckbox = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('uncheck')
            return jsonValue != null ? setUncheckbox(JSON.parse(jsonValue)) : null;
        } catch (e) {
            console.log(e);

        }
        // setCheckbox('')

    };

    useEffect(() => {
            getcheckbox()
    }, []);


    // const clearData = () => {
    //     AsyncStorage.clear();
    // }

    // console.log(name)

    const thirdTextInput = useRef()

    return (
        <ScrollView>

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

                <Checkbox.Item label="I Accept.."
                    onPress={() => { checked === 'checked' ? setChecked('unchecked') : setChecked('checked'),  uncheckbox.CheckStatus ? setUnheckbox('unchecked') : setUncheckbox('checked') }}
                    status={checked ? 'checked' : uncheckbox.CheckStatus}
                //  status={CheckStatus=="checked" ?  setCheckbox(check) : 'unchecked'} onPress={() => {
                //     setChecked(!checked);
                // }}
                />

                {/* <Button title="TextInput" onPress={() => textInput} /> */}

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => navigation.navigate("LocalStorage", setData(user_details), setCheckbox(check)
                    )}
                >
                    <Text style={styles.submitButtonText}> Login </Text>


                </TouchableOpacity>



                {/* <View style={{ margin: 20 }}>
                        <Button title="Set Data" onPress={setData} />
                    </View> */}

                {/* <View style={{ margin: 20 }}>
                        <Button title="Show Data" onPress={()=>{getData()} }/>
                    </View> */}

                {/* <View style={{ margin: 20 }}>
                        <Button title="Clear Data" onPress={clearData} />
                    </View> */}

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