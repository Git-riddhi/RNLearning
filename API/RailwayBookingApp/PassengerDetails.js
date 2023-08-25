import React, { useState } from "react";
import { Alert } from "react-native";
import {
    Button,
    FlatList,
    Image,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { RadioButton } from "react-native-paper";
import IconTwo from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Entypo";
import IconThree from "react-native-vector-icons/MaterialIcons";

const PassengerDetails = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [passengers, setPassengers] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [coachValues, setCoachValues] = useState([]);
    const [seatValues, setSeatValues] = useState([]);
    const [checkAge, setCheckAge] = useState("");
    const [checkName, setCheckName] = useState("");
    const [checkGender, setCheckGender] = useState("");

    const { selectedTrainItem } = props?.route?.params;
    console.log("selectedTrainItem====>", selectedTrainItem);

    const openModal = () => {
        setModalVisible(!isModalVisible);
    };

    const closeModal = () => {
        setModalVisible(false);
    };


    const validateAge = (age) => {
        const ageRegex = /^(?:[4-9]|[1-9][0-9]|1[01][0-9]|120)$/; // Matches ages from 1 to 120
        setAge(age)
        if (ageRegex.test(age)) {
            setCheckAge("");
        } else {
            setCheckAge("Please Enter Valid Age from 4 to 120.");
        }
    };

    const validateName = (name) => {
        const nameRegex = /^[A-Za-z]+$/;
        setName(name)
        if (nameRegex.test(name)) {
            setCheckName("");
        } else {
            setCheckName("Please Enter Valid Name.");
        }
    }

    const validation = () => {
        var isValid = true;

        if (name == "") {
            isValid = false;
            setCheckName("Name is Required");
        } else {
            setCheckName("");
        }

        if (age == "") {
            isValid = false;
            setCheckAge("Age is Required");
        } else {
            setCheckAge("");
        }

        if (gender == "") {
            isValid = false;
            setCheckGender("Gender is Required");
        } else {
            setCheckGender("");
        }


        return isValid;
    };

    const savePassengerDetails = () => {
        const newPassenger = { name, age, gender };
        setPassengers([...passengers, newPassenger]);

        // Calculate coach and seat values
        const newCoachValues = [...coachValues, "D6"];
        const newSeatValues = [...seatValues, "42"];

        setCoachValues(newCoachValues);
        setSeatValues(newSeatValues);

        closeModal();
        setName("");
        setAge("");
        setGender("");
        const newTotalPrice = (passengers.length + 1) * 550;
        setTotalPrice(newTotalPrice);
    };

    const deleteDetail = (index) => {
        Alert.alert("Delete Passenger ?", `Do You want to remove passenger list?`, [
            {
                text: "Yes",
                onPress: () => {
                    const array = [...passengers];
                    console.log("array :", array);
                    const deletedarray = array.splice(index, 1);
                    // console.log("deletearray :", deletedarray)
                    setPassengers(array);

                    // Calculate the new total price by subtracting the fare of the deleted passenger
                    const newTotalPrice = totalPrice - 550; // Assuming the fare is 550
                    setTotalPrice(newTotalPrice);
                },
            },
            { text: "No", onPress: () => console.log("Okay"), style: "cancel" },
        ]);
    };

    const renderPassengerItem = ({ item, index }) => (
        <View style={styles.passengerItem}>
            <View>
                <Text style={{ color: "black" }}>Name : {item.name}</Text>
                <Text style={{ color: "black" }}>Age : {item.age}</Text>
                <Text style={{ color: "black" }}>Gender : {item.gender}</Text>
            </View>

            <TouchableOpacity
                onPress={() => {
                    deleteDetail(index);
                }}
            >
                <IconThree name="delete" size={30} />
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
                    marginHorizontal: 10,
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
                        {selectedTrainItem.trainName} ({selectedTrainItem.trainNumber})
                    </Text>
                    <View
                        style={{
                            borderBottomWidth: 0.2,
                            marginVertical: 10,
                            borderColor: "grey",
                        }}
                    ></View>
                    <View style={styles.firstView}>
                        <Text style={styles.textStyle}>{selectedTrainItem.time}</Text>
                        <Text style={styles.textStyle2}>
                            -- {selectedTrainItem.durationTime} --
                        </Text>
                        <Text style={styles.textStyle}>{selectedTrainItem.reachTime}</Text>
                    </View>
                    <View style={styles.firstView}>
                        <Text style={styles.textStyle2}>{selectedTrainItem.From}</Text>
                        <Text style={styles.textStyle2}>{selectedTrainItem.To}</Text>
                    </View>
                    <View style={styles.firstView}>
                        <Text style={styles.textStyle2}>
                            {selectedTrainItem.departureDate}
                        </Text>
                        <Text style={styles.textStyle2}>{selectedTrainItem.reachDate}</Text>
                    </View>
                </View>

                <View style={styles.trainClassView}>
                    <Text style={styles.classText}>
                        {selectedTrainItem.selectedClass} Class
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                style={{
                    alignItems: "center",
                    flexDirection: "row",
                    marginHorizontal: 20,
                }}
                onPress={openModal}
            >
                <Icon name="plus" size={25} color={"black"} />
                <Text
                    style={{
                        fontSize: 15,
                        color: "black",
                        fontWeight: "bold",
                        marginLeft: 5,
                    }}
                >
                    Add Passengers
                </Text>
            </TouchableOpacity>

            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => {
                        setModalVisible(!isModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalHeading}>ADD PASSENGER DETAILS</Text>

                            <Text style={{ color: 'black', marginHorizontal: 15, }}>Name : </Text>
                            <TextInput
                                placeholder="Enter Full Name"
                                value={name}
                                onChangeText={(name) => validateName(name)}
                                style={styles.input}
                            />
                            {checkName ? (
                                <Text style={styles.checkText}>{checkName}</Text>
                            ) : (
                                <Text style={styles.checkText}></Text>
                            )}

                            <Text style={{ color: 'black', marginHorizontal: 15, }}>Age : </Text>
                            <TextInput
                                placeholder="Enter Age"
                                value={age}
                                keyboardType="number-pad"
                                onChangeText={(age) => validateAge(age)}
                                style={styles.input}
                            />
                            {checkAge ? (
                                <Text style={styles.checkText}>{checkAge}</Text>
                            ) : (
                                <Text style={styles.checkText}></Text>
                            )}

                            <View
                                style={{
                                    flexDirection: "row",
                                    marginRight: 25,
                                    marginTop: 5,
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Text style={{ color: 'black', marginHorizontal: 15 }}>Gender : </Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <RadioButton
                                        value="male"
                                        status={gender === "male" ? "checked" : "unchecked"}
                                        onPress={() => setGender("male")}
                                    />
                                    <Text style={{ color: 'black' }}>Male</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                                    <RadioButton
                                        value="female"
                                        status={gender === "female" ? "checked" : "unchecked"}
                                        onPress={() => setGender("female")}
                                    />
                                    <Text style={{ color: 'black' }}>Female</Text>
                                </View>
                            </View>
                            {checkGender ? (
                                <Text style={styles.checkText}>{checkGender}</Text>
                            ) : (
                                <Text style={styles.checkText}></Text>
                            )}

                            <View style={styles.modalButtonview}>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (validation()) {
                                            savePassengerDetails()
                                        }
                                    }}
                                    style={styles.saveButton}
                                >
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
                ItemSeparatorComponent={<View style={{ width: "100%", height: 5 }} />}
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
                <View style={{ backgroundColor: "green", width: "45%" }}>
                    <Text style={styles.footerButtonText}>{totalPrice} /- PRICE</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5}
                    style={{ backgroundColor: "red", width: "45%" }}
                    onPress={() => {
                        // console.log('passengers', passengers);
                        // passengers ?
                        props.navigation.navigate("ConfirmTicket", {
                            selectedTrainItem: selectedTrainItem,
                            passengersCount: passengers.length,
                            totalPrice: totalPrice,
                            passengers: passengers,
                            coachValues: coachValues,
                            seatValues: seatValues,
                        });
                        // : Alert.alert('Please add passengers.')
                    }}
                >
                    <Text style={styles.footerButtonText}>CONFIRM TICKET</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
    },
    mainView: {},

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
        backgroundColor: "lightgrey",
        fontWeight: "bold",
    },

    passengerItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        marginHorizontal: 10,
    },

    checkText: {
        color: "red",
        textAlign: "center",
    },

    input: {
        padding: 10,
        height: 40,
        // marginBottom: 10,
        marginHorizontal: 15,
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        borderBottomColor: "grey",
        alignItems: "center",
        // backgroundColor:'red'
    },
    saveButton: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: "40%",
    },
    saveButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },



    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(52, 52, 52, 0.8)",
    },
    modalView: {
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "50%",
    },
    modalButtonview: {
        alignItems: "center",
    },
    modalHeading: {
        fontSize: 17,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    footerButtonText: {
        borderWidth: 1.5,
        borderColor: "grey",
        color: "white",
        fontWeight: "bold",
        padding: 10,
        textAlign: "center",
    },
});

export default PassengerDetails;
