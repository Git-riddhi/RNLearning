import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ScrollView,
    Alert,
} from "react-native";
import { TrainClass, TrainDetails } from "./DataForBookTicket";
import { TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialIcons";
import { color } from "react-native-reanimated";

const FindTrain = (props) => {
    const [footerView, setFooterView] = useState(false);
    const [filteredItems, setFilteredItems] = useState(TrainDetails);

    const TrainClassSelection = ({ trainClasses, selectedClass, onSelect }) => {
        // console.log('trainClasses ===', trainClasses);
        // console.log('selectedClass ===', selectedClass);

        return (
            <View style={styles.trainClassView}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {trainClasses.map((trainClass) => {
                        return (
                            <TouchableOpacity
                                key={trainClass}
                                onPress={() => onSelect(trainClass)}
                                style={[
                                    styles.TouchableClass,
                                    {
                                        backgroundColor:
                                            trainClass === selectedClass ? "green" : "white",
                                    },
                                ]}
                            >
                                <Text style={styles.classText}>{trainClass}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        );
    };

    const handleCategorySelect = (trainIndex, selectedClass) => {
        const updatedTrainDetails = [...TrainDetails];

        // Clear previously selected class from other train items
        updatedTrainDetails.forEach((trainItem, index) => {
            if (index !== trainIndex) {
                trainItem.selectedClass = undefined;
            }
        });

        // Toggle the selection for the current train item
        if (updatedTrainDetails[trainIndex].selectedClass === selectedClass) {
            updatedTrainDetails[trainIndex].selectedClass = undefined;
        } else {
            updatedTrainDetails[trainIndex].selectedClass = selectedClass;
        }

        setFilteredItems(updatedTrainDetails);
        // console.log('updatedTrainDetails===>', updatedTrainDetails);
        setFooterView(true);
    };

    const Item = ({ item }) => (
        <View style={styles.mainView}>
            <TouchableOpacity
                style={styles.trainitemView}
            >
                <Text style={styles.textStyle}>
                    {item.trainName} ({item.trainNumber})
                </Text>
                <View
                    style={ styles.dividerView}
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
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View
                style={styles.headingView}
            >
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("CitySelection");
                    }}
                >
                    <AntDesign name="arrowleft" size={30} color={"black"} />
                </TouchableOpacity>

                <Text style={styles.headerText}>TRAIN DETAILS</Text>
                <Text></Text>
            </View>
            <FlatList
                data={TrainDetails}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View>
                        <Item item={item} trainIndex={index}></Item>
                        <TrainClassSelection
                            trainClasses={item.trainClass}
                            selectedClass={item.selectedClass}
                            onSelect={(selectedClass) =>
                                handleCategorySelect(index, selectedClass)
                            }
                        />
                    </View>
                )}
                keyExtractor={(item, index) => item + index}
                ItemSeparatorComponent={
                    <View
                        style={{ width: "100%", borderBottomWidth: 2, borderColor: "grey" }}
                    />
                }
            />

            {footerView ? (
                <View
                    style={styles.footerView}
                >
                    <TouchableOpacity
                        onPress={() => {
                            const selectedTrainItem = filteredItems.find(
                                (item) => item.selectedClass !== undefined
                            );
                            if (selectedTrainItem) {
                                props.navigation.navigate("FareBreakUp", {
                                    selectedTrainItem,
                                });
                            } else {
                                Alert.alert("Please select train class.");
                            }
                        }}
                        activeOpacity={0.5}
                        style={styles.priceButtonView}
                    >
                        <Text style={styles.priceText}>550/- PRICE</Text>
                        <Text style={{ color: "white" }}>Fare Breakup</Text>
                        <Icon name="arrow-drop-up" size={25} color={"white"} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.passengerDetailsButton}
                        onPress={() => {
                            const selectedTrainItem = filteredItems.find(
                                (item) => item.selectedClass !== undefined
                            );
                            if (selectedTrainItem) {
                                props.navigation.navigate("PassengerDetails", {
                                    selectedTrainItem,
                                });
                            } else {
                                Alert.alert("Please select train class.");
                            }
                        }}
                    >
                        <Text style={styles.footerButtonText}>PASSENGER DETAILS</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View></View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },
    headingView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,
    },
    mainView: {},
    trainitemView: {
        margin: 15
    },
    dividerView:{
        borderBottomWidth: 0.2,
        marginVertical: 10,
        borderColor: "grey",
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
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
    // headerView: {
    //     padding: 10,
    //     marginBottom: 10,
    //     flex: 1,
    //     alignSelf: "center",
    // },
    textStyle2: {
        fontSize: 15,
        color: "grey",
        fontWeight: "700",
    },
    trainClassView: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        marginLeft: 10,
    },
    classText: {
        fontSize: 15,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        padding: 6,
        // backgroundColor:'red',
        width: 100,
    },
    TouchableClass: {
        borderWidth: 1.5,
        borderColor: "grey",
        width: 100,
        borderRadius: 10,
        marginRight: 5,
    },

    footerButtonText: {
        borderWidth: 1.5,
        borderColor: "grey",
        color: "white",
        fontWeight: "bold",
        padding: 10,
        textAlign: "center",
    },
    footerView: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingVertical: 15,
    },
    priceButtonView: {
        backgroundColor: "green",
        borderWidth: 1.5,
        borderColor: "grey",
        width: "50%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 5.5
    },
    priceText: {
        color: "white",
        marginRight: 7
    },
    passengerDetailsButton: {
        backgroundColor: "red",
        width: "50%"
    }
});
export default FindTrain;
