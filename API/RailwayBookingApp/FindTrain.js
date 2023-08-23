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

const FindTrain = (props) => {
    const [footerView, setFooterView] = useState(false);
    const [trainClass, setTrainClass] = useState(false);
    const [filteredItems, setFilteredItems] = useState(TrainDetails);
    const [selectedTrainclass, setSelectedTrainclass] = useState();
    const [uniqueKeyArray, setUniqueKeyArray] = useState();


    const TrainClassSelection = ({ trainClasses, selectedClass, onSelect }) => {
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
                                        trainClass === selectedClass  ? "green" : "white",
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
        updatedTrainDetails[trainIndex].selectedClass = selectedClass;
        setFilteredItems(updatedTrainDetails);
        // console.log('filtered item ===>', filteredItems);
        setFooterView(true)
    };


    const Item = ({ item }) => (
      
        <View style={styles.mainView}>
            <TouchableOpacity
                style={{ margin: 15 }}
                onPress={() => {
                    filteredItems
                        ? props.navigation.navigate("PassengerDetails", { item })
                        : Alert.alert("Please select train class.");
                }}
            >
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
            </TouchableOpacity>

            {/* <View style={styles.trainClassView}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {item.trainClass.map((item) => {

                        return (
                            <TouchableOpacity
                                key={item.name}
                                onPress={() => {
                                    handleCategorySelect( item.name);
                                    setTrainClass(true);
                                    setFooterView(true);
                                }}
                                style={[
                                    styles.TouchableClass,
                                    {
                                        backgroundColor:
                                            item.selected ? "green" : "white",
                                    },
                                ]}
                            >
                                <Text style={styles.classText}>{item.name}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View> */}
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
                        props.navigation.navigate("CitySelection");
                    }}
                >
                    <AntDesign name="arrowleft" size={30} color={"black"} />
                </TouchableOpacity>

                <Text style={styles.headerText}>TRAIN DETAILS</Text>
                <View></View>
            </View>
            <FlatList
                data={TrainDetails}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View>

                        <Item
                            item={item}
                            trainIndex={index}>
                        </Item>
                        <TrainClassSelection
                            trainClasses={item.trainClass}
                            selectedClass={item.selectedClass}
                            onSelect={(selectedClass) => handleCategorySelect(index, selectedClass)}
                        />
                    </View>
                )}

                keyExtractor={(item, index) => item + index}
                ItemSeparatorComponent={
                    <View
                        style={{ width: "100%", borderBottomWidth: 3, borderColor: "grey" }}
                    />
                }
            />

            {footerView ? (
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
                        <Text style={styles.footerButtonText}>550/- PRICE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: "red", width: "45%" }}
                        onPress={() => {

                            props.navigation.navigate("PassengerDetails")
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
        marginVertical: 10,
    },

    mainView: {
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
    headerView: {
        padding: 10,
        marginBottom: 10,
        flex: 1,
        alignSelf: "center",
    },
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
        padding: 10,
    },
    TouchableClass: {
        borderWidth: 1.5,
        borderColor: "grey",
        width: 60,
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
});
export default FindTrain;
