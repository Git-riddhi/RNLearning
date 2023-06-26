import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';


const AxiosScreen = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const baseUrl = 'https://crudcrud.com';

    const getDataUsingPost = async () => {
        //POST json
        var data = { Name: name, Age: age }
        await axios.post(`${baseUrl}/api/ccc597ac033747bc8ab2e8f1c3e3495e/unicorns`,
            data,
        ).then(function (response) {
            console.log('response--->', JSON.stringify(response));
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    axios.interceptors.request.use(function (config) {
        console.log("request", JSON.stringify(config))
        config.headers['Authorization'] = 'Riddhi';
        console.log("header :",config.headers)
        return config;
    }, function (error) {
        return Promise.reject(error);
    });


    axios.interceptors.response.use(function (response) {
        console.log("response", JSON.stringify(response))
        return response;
    }, function (error) {
        return Promise.reject(error);
    });

    const Interceptors = () => {
        var data = { Name: name, Age: age }
        axios({
            method: 'post',
            url: `${baseUrl}/api/ccc597ac033747bc8ab2e8f1c3e3495e/unicorns`,
            data: data,
        }).then((response) => {
            console.log('response-interceptors-->', JSON.stringify(response.data))
        })
    }

    const getDataUsingGet = async () => {
        //GET request
        await axios.get(`${baseUrl}/api/ccc597ac033747bc8ab2e8f1c3e3495e/unicorns`,)
            .then((response) => { console.log('response-get-->', JSON.stringify(response.data)); })
    }


    useEffect(() => {
        getDataUsingGet();
    }, [])

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

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => { Interceptors() }}>
                    <Text style={styles.submitButtonText}> ADD</Text>
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
        paddingHorizontal: 15
    },
    submitButton: {
        backgroundColor: '#f0ffff',
        // padding: 10,
        margin: 10,
        height: 40,
        width: 80,
        borderRadius: 20, alignItems: 'center',
        justifyContent: "center",
    },
    submitButtonText: {
        fontSize: 20,
        color: '#1E1A3C',
        textAlign: 'center',

        fontWeight: 'bold'
    },

});

export default AxiosScreen;
