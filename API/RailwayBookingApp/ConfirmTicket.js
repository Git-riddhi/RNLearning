import React from 'react';
import { Text, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"


const ConfirmTicket = (props) => {

    const { selectedTrainItem, passengersCount, totalPrice, passengers, coachValues, seatValues } = props?.route?.params;
    console.log("passengersCount====>", passengersCount);
    console.log("passengers====>", passengers);

    const passengerNames = passengers.map(passenger => passenger.name);
    // const passengerAges = passengers.map(passenger => passenger.age);


    const renderItem = ({ item, index }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{passengerNames[index]}</Text>
            <Text style={styles.cell}>{coachValues[index]}</Text>
            <Text style={styles.cell}>{seatValues[index]}</Text>
        </View>
    );


    return (
        <View style={{ flex: 1, marginTop: 15 }}>
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
                        props.navigation.navigate("PassengerDetails", { selectedTrainItem });
                    }}
                >
                    <AntDesign name="arrowleft" size={30} color={"black"} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>CONFIRMATION TICKET</Text>
                <View></View>
            </View>

            <View style={{ flex: 1, borderWidth: 1, borderColor: 'grey', margin: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', margin: 15, }}>Passengers : {passengersCount}</Text>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', margin: 15, }}>Total Price : {totalPrice}/-</Text>
                </View>

                <View style={styles.mainView}>
                    <View style={{ margin: 15, }}>
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
                            <Text style={styles.textStyle2}>-- {selectedTrainItem.durationTime} --</Text>
                            <Text style={styles.textStyle}>{selectedTrainItem.reachTime}</Text>
                        </View>
                        <View style={styles.firstView}>
                            <Text style={styles.textStyle2}>{selectedTrainItem.From}</Text>
                            <Text style={styles.textStyle2}>{selectedTrainItem.To}</Text>
                        </View>
                        <View style={styles.firstView}>
                            <Text style={styles.textStyle2}>{selectedTrainItem.departureDate}</Text>
                            <Text style={styles.textStyle2}>{selectedTrainItem.reachDate}</Text>
                        </View>
                    </View>


                    <TouchableOpacity style={styles.trainClassView}
                    >
                        <Text style={styles.classText}>{selectedTrainItem.selectedClass} class</Text>
                    </TouchableOpacity>


                </View>

                <Text style={styles.details}>Passenger Details</Text>
                <View style={styles.tableContainer}>
                    <View style={styles.header}>
                        <Text style={styles.tableHeader}>Name</Text>
                        <Text style={styles.tableHeader}>Coach</Text>
                        <Text style={styles.tableHeader}>Seat</Text>
                    </View>
                    <FlatList
                        data={passengerNames}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

                <View
                    style={{

                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        paddingVertical: 15,
                    }}
                >
                    <TouchableOpacity activeOpacity={0.5}
                        style={{ backgroundColor: "green", width: "45%" }}
                        onPress={() => {
                            console.log('Downloading.....');
                        }}
                    >
                        <Text style={styles.footerButtonText}>DOWNLOAD TICKET</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },

    mainView: {
        // backgroundColor: 'red',

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
        alignSelf: "center",

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
    tableContainer: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    tableHeader: {
        fontWeight: 'bold',
        // flex: 1,
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        width: 50,
        // backgroundColor:'red'

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    cell: {
        // flex: 1,
        textAlign: 'center',
        color: 'black',
        width: 50,
        // backgroundColor:'red'
    },
    details: {
        fontSize: 17,
        color: 'black', fontWeight: 'bold',
        marginHorizontal: 15,
        marginTop: 40

    },
    footerButtonText: {
        borderWidth: 1.5,
        borderColor: "grey",
        color: "white",
        fontWeight: "bold",
        padding: 10,
        textAlign: "center",
    },

})

export default ConfirmTicket;
