import { View, Text, Button } from "react-native";
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorage = () => {
    const setData = () => {
        AsyncStorage.setItem("name", "Riddhi")
        AsyncStorage.setItem("age", JSON.stringify(24))

    }

    const showData = async () => {
        const name = await AsyncStorage.getItem("name");
        const age = await AsyncStorage.getItem("age");

        console.log("name", name)
        console.log("age", age, typeof (age))

    }

    return (
        <View>

            <View style={{ margin: 20 }}>
                <Button title="Set Data" onPress={() => { setData }}></Button>
            </View>

            <View style={{ margin: 20 }}>
                <Button title="Show Data" onPress={() => { showData }}></Button>
            </View>

        </View>
    )
}

export default LocalStorage;