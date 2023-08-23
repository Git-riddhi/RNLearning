import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button, FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import IconTwo from 'react-native-vector-icons/AntDesign';
import Icon from "react-native-vector-icons/Entypo";
import IconThree from "react-native-vector-icons/MaterialIcons";


const PassengerDetails = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [passengers, setPassengers] = useState([]);

    const { item } = props?.route?.params;
    console.log('item====>', item);

    const trainclass = props?.route?.params?.selectedTrainClass
    console.log('trainclass====>', trainclass);


    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const savePassengerDetails = () => {
        const newPassenger = { name, age, gender };
        setPassengers([...passengers, newPassenger]);
        closeModal();
        setName('');
        setAge('');
        setGender('')
    };

    const deleteDetail = (index) => {
        Alert.alert(
            "Delete Passenger ?",
            `Do You want to remove passenger list?`,
            [
                {
                    text: 'Yes', onPress: () => {
                        const array = [...passengers]
                        console.log("array :", array)
                        const deletedarray = array.splice(index, 1)
                        // console.log("deletearray :", deletedarray)
                        setPassengers(array)
                    }
                },
                { text: 'No', onPress: () => console.log('Okay'), style: 'cancel' },
            ]
        );
    }



    const renderPassengerItem = ({ item }) => (
        <View style={styles.passengerItem}>
            <View>
                <Text style={{ color: 'black' }}>Name : {item.name}</Text>
                <Text style={{ color: 'black' }}>Age : {item.age}</Text>
                <Text style={{ color: 'black' }}>Gender : {item.gender}</Text>
            </View>

            <TouchableOpacity onPress={() => { deleteDetail() }} >
                <IconThree name='delete' size={30} />
            </TouchableOpacity>
        </View>
    );


    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginHorizontal: 15,
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("FindTrain");
                    }}
                >
                    <IconTwo name="arrowleft" size={30} color={"black"} />
                </TouchableOpacity>

                <Text style={styles.headerText}>PASSENGER DETAILS</Text>
                <View></View>
            </View>
            <View style={styles.mainView}>
                <View style={{ margin: 15 }}>
                    <Text style={styles.textStyle}>
                        {item.trainName} ({item.trainNumber})
                    </Text>
                    <View
                        style={{
                            borderBottomWidth: 0.2,
                            marginVertical: 10,
                            borderColor: "grey",
                        }}
                    ></View>
                    <View style={styles.firstView}>
                        <Text style={styles.textStyle}>{item.time}</Text>
                        <Text style={styles.textStyle2}>-- {item.durationTime} --</Text>
                        <Text style={styles.textStyle}>{item.reachTime}</Text>
                    </View>
                    <View style={styles.firstView}>
                        <Text style={styles.textStyle2}>{item.From}</Text>
                        <Text style={styles.textStyle2}>{item.To}</Text>
                    </View>
                    <View style={styles.firstView}>
                        <Text style={styles.textStyle2}>{item.departureDate}</Text>
                        <Text style={styles.textStyle2}>{item.reachDate}</Text>
                    </View>
                </View>

                <View style={styles.trainClassView}>
                    <TouchableOpacity style={styles.TouchableClass}
                    >
                        <Text style={styles.classText}>{item.trainClass}</Text>
                    </TouchableOpacity>


                </View>
            </View>
            <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', marginHorizontal: 20 }} onPress={openModal}>
                <Icon name='plus' size={25} color={'black'} />
                <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', marginLeft: 5 }}>Add Passengers</Text>
            </TouchableOpacity>


            <View >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!isModalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalHeading}>ADD PASSENGER DETAILS</Text>

                            <TextInput
                                placeholder="Name"
                                value={name}
                                onChangeText={setName}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Age"
                                value={age}
                                keyboardType='number-pad'
                                onChangeText={setAge}
                                style={styles.input}
                            />

                            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 5, alignItems: 'center', justifyContent: 'space-between' }}>

                                <Text>Gender</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <RadioButton
                                        value="male"
                                        status={gender === 'male' ? 'checked' : 'unchecked'}
                                        onPress={() => setGender('male')}
                                    />
                                    <Text>Male</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <RadioButton
                                        value="female"
                                        status={gender === 'female' ? 'checked' : 'unchecked'}
                                        onPress={() => setGender('female')}
                                    />
                                    <Text>Female</Text>
                                </View>
                            </View>

                            <View style={styles.modalButtonview}>
                                <TouchableOpacity onPress={() => { name && age && gender ? savePassengerDetails() : Alert.alert('All details are required.') }} style={styles.saveButton}>
                                    <Text style={styles.saveButtonText}>Save</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>


            <FlatList
                data={passengers}
                renderItem={renderPassengerItem}
                keyExtractor={(item, index) => index.toString()}
                style={styles.flatList}
                ItemSeparatorComponent={
                    <View
                        style={{ width: "100%", height: 5 }}
                    />
                }
            />

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    width: "100%",
                    paddingVertical: 15,
                }}
            >
                <TouchableOpacity style={{ backgroundColor: "green", width: "45%" }}>
                    <Text style={styles.footerButtonText}>1350/- PRICE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "red", width: "45%" }} onPress={() => {
                    props.navigation.navigate('ConfirmTicket',
                        // {
                        //     data: 
                        {
                            // Name: name,
                            // Age: age
                            item: item

                        }
                        // }
                    )
                }}>
                    <Text style={styles.footerButtonText}>CONFIRM TICKET</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        marginBottom: 10,
    },
    mainView: {
        // padding: 10,
        // backgroundColor: 'red'
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        marginBottom: 10,
    },
    firstView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textStyle: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
    },
    textStyle2: {
        fontSize: 15,
        color: "grey",
        fontWeight: "700",
    },
    trainClassView: {
        alignItems: "center",
        width: "100%",
        marginBottom: 15,
        marginHorizontal: 10,
    },
    classText: {
        fontSize: 15,
        textAlign: "center",
        color: "black",
        borderWidth: 1,
        padding: 5,
        backgroundColor: 'lightgrey',
        fontWeight: "bold",
    },

    passengerItem: {
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginHorizontal: 10,
    },

    input: {
        padding: 10,
        // marginBottom: 10,
        marginHorizontal: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: '40%'
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    modalView: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '50%'

    },


    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',

    },
    modalView: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '50%'

    },
    modalButtonview: {
        alignItems: 'center',

    },
    modalHeading: {
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center', marginVertical: 10
    },
    footerButtonText: {
        borderWidth: 1.5,
        borderColor: "grey",
        color: "white",
        fontWeight: "bold",
        padding: 10,
        textAlign: "center",
    }

})

export default PassengerDetails;

