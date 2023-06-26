import * as React from 'react';
import { View, Text, Button } from 'react-native';

// const LoginDataScreen = (props) => {

// let name = props.route.params.name
// let email = props.route.params.email
// let number = props.route.params.number
// let password = props.route.params.password
// let address = props.route.params.address
// console.log("route", props)

const LoginDataScreen = ({ route }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Text>Name : {name}</Text>
            <Text>Number : {number}</Text>
            <Text>Email : {email}</Text>
            <Text>Password : {password}</Text>
            <Text>Address : {address}</Text> */}

            <Text>Name : {route.params.name}</Text>
            <Text>Number : {route.params.number}</Text>
            <Text>Email : {route.params.email}</Text>
            <Text>Password : {route.params.password}</Text>
            <Text>Address : {route.params.address}</Text>

        </View>
    );
}

export default LoginDataScreen;