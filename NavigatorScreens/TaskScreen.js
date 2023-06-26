import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';

// const deviceWidth = Dimensions.get("screen").width
// const deviceHeight = Dimensions.get("screen").height

const TaskScreen = (props) => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [task, setTask] = useState('')
    const [taskId, setTaskId] = useState('')

    useEffect(() => {
        if (
            props.route.params.item) {
            // console.log("previous item", props.route.params.item)
            setName(props.route.params.item.Name)
            // console.log("previous item's name :", props.route.params.item.Name)

            setId(props.route.params.item.ID)
            setTask(props.route.params.item.Task)
            setTaskId(props.route.params.item.TaskId)
        }

    }, [])

    const itemEvent = () => {
        let event = { 'Name': name, 'ID': id, 'Task': task, 'TaskId': taskId }
        props.route.params.event(event)

        props.navigation.goBack()

        // console.log("event", event)

    }

    const getUpdateData = () => {
        let updatedata = { 'Name': name, 'ID': id, 'Task': task, 'TaskId': taskId }
        props.route.params.updateEvent(updatedata)

        props.navigation.goBack()

        console.log("updated data :", updatedata)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>ADD ITEMS</Text>
            <View style={styles.firstView}>

                <TextInput
                    placeholder="Enter ID"
                    onChangeText={(id) => setId(id)}
                    style={styles.textInputStyle}
                    autoCapitalize="words"
                    placeholderTextColor='grey'
                    value={id}

                />
                <TextInput
                    placeholder="Enter Name"
                    onChangeText={(name) => setName(name)}
                    style={styles.textInputStyle}
                    autoCapitalize="words"
                    placeholderTextColor='grey'
                    value={name}
                />

                <TextInput
                    placeholder="Enter Task"
                    onChangeText={(task) => setTask(task)}
                    style={styles.textInputStyle}
                    autoCapitalize="words"
                    placeholderTextColor='grey'
                    value={task}
                />

                <TextInput
                    placeholder="Enter TaskId"
                    onChangeText={(taskId) => setTaskId(taskId)}
                    style={styles.textInputStyle}
                    autoCapitalize="words"
                    placeholderTextColor='grey'
                    value={taskId}
                />
                {props.route.params.item
                    ? <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => { getUpdateData() }}>
                        <Text style={styles.submitButtonText}> UPDATE </Text>
                    </TouchableOpacity>
                    : <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => { itemEvent() }}>
                        <Text style={styles.submitButtonText}> SUBMIT </Text>
                    </TouchableOpacity>
                }
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
        marginVertical: 30
    },
    submitButton: {
        backgroundColor: '#f0ffff',
        padding: 10,
        margin: 10,
        height: 50,
        borderRadius: 20,
    },
    submitButtonText: {
        fontSize: 20,
        color: '#1E1A3C',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
export default TaskScreen;