import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { View, StyleSheet, Text, Alert, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

const deviceWidth = Dimensions.get("screen").width
const deviceheight = Dimensions.get("screen").height

const ToDoScreen = (props) => {
    const [output, setOutput] = useState([])

    const event = (item) => {

        console.log('item', item)

        const array = [...output]
        array.push(item)
        setOutput(array)

    }

    const updateEvent = (updatedata) => {

        const updatedArray = [...output]
        console.log(output, 'output array')

        updatedArray.forEach((item, index) => {
            if (item.ID == updatedata.ID) {
                updatedArray[index] = updatedata
            }

            setOutput(updatedArray)
        })
    }

    const deleteTask = (index) => {
        Alert.alert(
            "Are You Sure ?",
            "You want to delete ?",
            [
                {
                    text: 'Yes', onPress: () => {
                        const array = [...output]
                        // console.log("array :", array)
                        const deletedarray = array.splice(index, 1)
                        // console.log("deletearray :", deletedarray)
                        setOutput(array)
                    }
                },
                { text: 'No', onPress: () => console.log('Okay'), style: 'cancel' },
            ]
        );
    }

    const editTask = (item) => {
        props.navigation.navigate('Task', { item, updateEvent: updateEvent })

    }

    const Item = ({ item, index }) => (
        // console.log("item-name :",item.Name),
        <View style={styles.mainView}>
            <View>
                <Text style={styles.textStyle}> ID : {item.ID}</Text>
                <Text style={styles.textStyle}> Name : {item.Name}</Text>
                <Text style={styles.textStyle}> Task : {item.Task}</Text>
                <Text style={styles.textStyle}> Task Id : {item.TaskId}</Text>
            </View>

            <View style={styles.iconViewstyle}>
                <TouchableOpacity onPress={() => { editTask(item) }} >
                    <Image
                        style={styles.iconStyle}
                        source={require('../assets/edit.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { deleteTask(index) }} >
                    <Image
                        style={styles.iconStyle}
                        source={require('../assets/delete.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>

    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>TODO LIST</Text>
            <View style={styles.firstView}>
                <Text style={styles.textInputStyle}> Add Task</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Task", { event: event })}>
                    <Image style={styles.image} resizeMode={'contain'} source={require('../assets/add.png')} />
                </TouchableOpacity>

            </View>

            <FlatList
                data={output}
                renderItem={({ item, index }) => <Item item={item} index={index} />}
                ItemSeparatorComponent={<View style={{ width: 10, height: 10 }} />}
            />

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
    iconViewstyle: {
        width: deviceWidth / 2,
        height: deviceheight / 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        height: 40,
        width: 40,
        marginHorizontal: 20
    },
    firstView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    textInputStyle: {
        width: '50%',
        height: 40,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 20,
        borderRadius: 20,
        textAlign: "center",
        backgroundColor: '#f0ffff',
        padding: 7,
        elevation: 5,
        marginRight: 20,
        marginVertical: 20
    },
    mainView: {
        width: deviceWidth,
        borderWidth: 3,
        borderColor: 'grey',
        padding: 10,
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 15,
        color: 'white',
        width: deviceWidth / 2
    },
    addButton: {
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        borderRadius: 20,
        backgroundColor: '#f0ffff',
        padding: 7,
        height: 40,
        width: 50,
        textAlign: 'center'
    },

});
export default ToDoScreen;