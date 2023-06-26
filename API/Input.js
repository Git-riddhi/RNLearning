import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Dimensions } from 'react-native';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';


const InputScreen = (props) => {
    
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [designation, setDesignation] = useState('')


    const getDataUsingPost = () => {
        //POST json
        var dataToSend = { 'Name': name, 'Age': age, 'Designation': designation };

        //making data to send on server
        var formBody = [];
        formBody = JSON.stringify(dataToSend);
        //POST request
        fetch('https://crudcrud.com/api/c86005ad4088414c8145734c6335c9d1/unicorns', {
            method: 'POST', //Request Type
            body: formBody, //post body 
            headers: {
                //Header Defination
                'Content-Type':
                    'application/json',
            },
        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => { props.route.params.ShowData(responseJson);
                // Alert.alert("Success", JSON.stringify(responseJson));
                console.log("Post", responseJson);
            })
            //If response is not in json then in error
            .catch((error) => {
                Alert.alert("error", JSON.stringify(error));
                console.error("error :", error);
            });
            props.navigation.navigate('AddData')
    };

    

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Data</Text>
            <View style={styles.firstView}>
                <TextInput
                    placeholder="Enter Name"
                    onChangeText={(name) => setName(name)}
                    style={styles.textInputStyle}
                    autoCapitalize="words"
                    placeholderTextColor='grey'
                />

                <TextInput
                    placeholder="Enter Age"
                    onChangeText={(age) => setAge(age)}
                    style={styles.textInputStyle}
                    autoCapitalize="words"
                    placeholderTextColor='grey'
                />

                <TextInput
                    placeholder="Enter Designation"
                    onChangeText={(designation) => setDesignation(designation)}
                    style={styles.textInputStyle}
                    autoCapitalize="words"
                    placeholderTextColor='grey'
                />


                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => {getDataUsingPost() }}>
                    <Text style={styles.submitButtonText}> ADD </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1A3C',
    },
    heading: {
        color: '#fff',
        fontSize: 25,
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 25,
    },
    image: {
        height: 50,
        width: 50,
        tintColor: 'white'
    },
    firstView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputStyle: {
        width: '75%',
        borderRadius: 20,
        backgroundColor: '#f0ffff',
        padding: 7,
        elevation: 5,
        marginRight: 20,
        marginVertical: 20,
        paddingHorizontal:15
    },
    submitButton: {
        backgroundColor: '#f0ffff',
        // padding: 10,
        margin: 10,
        height: 40,
        width:80,
        borderRadius: 20,alignItems:'center',
        justifyContent:"center",
    },
    submitButtonText: {
        fontSize: 20,
        color: '#1E1A3C',
        textAlign: 'center',
        
        fontWeight: 'bold'
    },
  


});
export default InputScreen;

