import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-paper";
import IconTwo from "react-native-vector-icons/AntDesign";

const FareBreakUp = (props) => {

    const { selectedTrainItem } = props?.route?.params;
    // console.log("selectedTrainItem====>", selectedTrainItem.trainNumber);

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

                <Text style={styles.heading}>FARE BREAKUP</Text>
                <View></View>
            </View>

            <View
                style={styles.headerviewStyle}
            >
                <Text style={styles.headertextStyle}>Train Number : {selectedTrainItem.trainNumber}</Text>
                <Text style={styles.headertextStyle}>Class : {selectedTrainItem.selectedClass}</Text>
            </View>

            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Base Fare</Text>
                <Text style={styles.textStyle}> ₹ 658</Text>
            </View>
            <Divider style={styles.dividerStyle} />

            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Reservation Charges</Text>
                <Text style={styles.textStyle}> ₹ 40</Text>
            </View>
            <Divider style={styles.dividerStyle} />

            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Superfast Charges</Text>
                <Text style={styles.textStyle}> ₹ 45</Text>
            </View>
            <Divider style={styles.dividerStyle} />

            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Dynamic Charges</Text>
                <Text style={styles.textStyle}> ₹ 264</Text>
            </View>
            <Divider style={styles.dividerStyle} />

            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>GST</Text>
                <Text style={styles.textStyle}> ₹ 51</Text>
            </View>
            <Divider style={styles.dividerStyle} />

            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Catering Charges</Text>
                <Text style={styles.textStyle}> ₹ 275</Text>
            </View>
            <Divider style={styles.dividerStyle} />

            <View style={styles.headerviewStyle}>
                <Text style={styles.headertextStyle}>TOTAL AMOUNT</Text>
                <Text style={styles.headertextStyle}> ₹ 1335</Text>
            </View>
            {/* <Divider style={styles.dividerStyle} /> */}

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },
    heading: {
        fontSize: 20,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
    },
    headerviewStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 20,

    },
    headertextStyle: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
    },

    viewStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,

    },
    textStyle: {
        fontSize: 14,
        color: "black",
        fontWeight: "600",
        marginHorizontal: 10,
    },
    dividerStyle: {
        width: "90%",
        marginHorizontal: 15,
        backgroundColor: "grey"
    },
});
export default FareBreakUp;
