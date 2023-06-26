import * as React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', }}>

            <Button title="Details"
                onPress={() => navigation.navigate('Details')} />

            <Button title="Profile"
                onPress={() => navigation.navigate('Profile')} />

            <Button title="Settings"
                onPress={() => navigation.navigate('Settings')} />

            <Button title="Contacts"
                onPress={() => navigation.navigate('Contacts')} />

            <Button title="Login"
                onPress={() => navigation.navigate("Login")} />

            <Button title="ToDo"
                onPress={() => navigation.navigate("ToDoList")} />

            {/* <Button title="Task"
                onPress={() => navigation.navigate("Task")} /> */}

        </View>

    );
}

export default HomeScreen;