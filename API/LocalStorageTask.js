import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox } from 'react-native-paper';

export default function App({ navigation }) {

    const [userDetails, setUserDetails] = useState({})

    // console.log("Name :",userDetails.Name)
    // console.log("Number :",userDetails.Number)
    // console.log("Email :",userDetails.Email)
    // console.log("Password :",userDetails.Password)
    // console.log(checkbox);

    const [checkbox, setCheckbox] = React.useState({});

    const [unchecked, setUnchecked] = useState(false)

    const uncheck = { CheckStatus: unchecked }

    const setcheckbox = async (uncheck) => {
        try {
            const jsonValue = JSON.stringify(uncheck)
            await AsyncStorage.setItem('uncheck', jsonValue)
            console.log("uncheck", jsonValue)
        } catch (e) {
            // saving error
            console.log("error", e);
        }
        // setChecked('')

    };



    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user_details')
            return jsonValue != null ? setUserDetails(JSON.parse(jsonValue)) : null;
        } catch (e) {
            console.log(e);

        }


    };

    const getCheckbox = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('check')
            return jsonValue != null ? setCheckbox(JSON.parse(jsonValue)) : null;
        } catch (e) {
            console.log(e);

        }
        // setCheckbox('')

    };

    useEffect(() => {
        getData(),
            getCheckbox()
    }, []);

    // const showData = async () => {
    //     let user = await AsyncStorage.getItem('user_details');
    //     user = JSON.parse(user);
    //     console.log(typeof user, user);
    //     setName(user.name);
    //     setNumber(user.number);
    //     setEmail(user.email);
    //     setPassword(user.password);
    //     setAge(user.age);

    //     // const name = await AsyncStorage.getItem("name");
    //     // const age = await AsyncStorage.getItem("age");
    //     // console.log(name);
    //     // console.log(typeof(age), age)
    // };

    // const clearData = () => {
    //     AsyncStorage.clear();
    //     navigation.navigate('Login')
    //     setUserDetails('')
    //     setCheckbox('')
    // }

    return (
        <View>

            <Text style={{ fontSize: 19, color: 'black', margin: 20 }}>
                Name : {userDetails.Name}
            </Text>

            <Text style={{ fontSize: 19, color: 'black', margin: 20 }}>
                Email : {userDetails.Email}
            </Text>

            <Text style={{ fontSize: 19, color: 'black', margin: 20 }}>
                PhoneNumber : {userDetails.Number}
            </Text>

            <Checkbox.Item label="I Accept "

                onPress={() => { checkbox.CheckStatus ? setCheckbox('checked') : setCheckbox('unchecked')}}
                status={checkbox.CheckStatus}

            />

            <View style={{ margin: 20 }}>
                <Button title=" Log Out"  onPress={() => navigation.navigate("Login",  setcheckbox(uncheck)
                    )} />
            </View>

        </View>
    );
}


