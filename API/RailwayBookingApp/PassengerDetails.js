import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";


const selectedTrainDetail = [
    {
        trainName: 'HSR BDTS SF EXPRESS',
        trainNumber: '20908',
        departureDate: '21 Aug 2023',
        reachDate: '22 Aug 2023',
        From: 'Ahmedabad',
        To: 'Indore',
        time: '23:15',
        reachTime: '08:55',
        durationTime: '09h:40m',

    },
]
const PassengerDetails = (props) => {


    const Item = ({ item }) => (
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
                    <Text style={styles.classText}>SL</Text>
                </TouchableOpacity>


            </View>
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
                    <AntDesign name="arrowleft" size={30} color={"black"} />
                </TouchableOpacity>

                <Text style={styles.headerText}>Passenger Details</Text>
                <View></View>
            </View>

            <FlatList
                data={selectedTrainDetail}
                showsVerticalScrollIndicator={false}
                // ListHeaderComponent={<View style={styles.headerView}><Text style={styles.headerText}>Find Trains</Text></View>}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item, index) => item + index}
                ItemSeparatorComponent={
                    <View
                        style={{ width: "100%", borderBottomWidth: 3, borderColor: "grey" }}
                    />
                }
            />

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
        fontWeight: "bold",
        marginRight: 10,
        padding: 10,
        width: 100,
    },


})

export default PassengerDetails;
