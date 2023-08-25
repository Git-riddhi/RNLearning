import React, { useState } from "react";
import {
    Alert,
    Button,
    FlatList,
    Image,
    ImageBackground,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import DatePicker from "react-native-date-picker";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";
import { CityData } from "./DataForBookTicket";
import AntDesign from "react-native-vector-icons/AntDesign";

const CitySelection = (props) => {
    const [selectedDepartureDate, setSelectedDepartureDate] = useState(
        new Date()
    );

    const [isDepartureDatePickerVisible, setDepartureDatePickerVisible] =
        useState(false);

    const [isFromCityModalVisible, setFromCityModalVisible] = useState(false);
    const [isToCityModalVisible, setToCityModalVisible] = useState(false);

    const [selectedFromCity, setSelectedFromCity] = useState(null);
    const [selectedToCity, setSelectedToCity] = useState(null);


    const showDepartureDatePicker = () => {
        setDepartureDatePickerVisible(true);
    };
   
    const selectFromCity = (city) => {
        setSelectedFromCity(city);
        setFromCityModalVisible(false);
    };

    const selectToCity = (city) => {
        setSelectedToCity(city);
        setToCityModalVisible(false);
    };

    const swipeText = () => {
        const temp = selectFromCity;
        setSelectedFromCity(selectToCity);
        setSelectedToCity(temp);
    };

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headerText}>TRAIN SEARCH</Text>
            </View>

            <View style={styles.innercontainer}>
                <View style={styles.ChooseCityContainer}>
                    <View style={styles.fromView}>
                        <Text style={styles.title}>From</Text>
                        <View style={styles.SelectionView}>
                            {selectedFromCity ? (
                                <Text style={{ color: "black" }}>{selectedFromCity.city}</Text>
                            ) : (
                                <Text>Select</Text>
                            )}
                            <TouchableOpacity
                                onPress={() => {
                                    setFromCityModalVisible(!isFromCityModalVisible);
                                }}
                            >
                                <MaterialIcons name="arrow-drop-down" size={35} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                swipeText();
                            }}
                        >
                            <Image
                                source={require("../../assets/swipeArrow.png")}
                                style={styles.swipeImage}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.fromView}>
                        <Text style={styles.title}>To</Text>

                        <View style={styles.SelectionView}>
                            {selectedToCity ? (
                                <Text style={{ color: "black" }}>{selectedToCity.city}</Text>
                            ) : (
                                <Text>Select</Text>
                            )}
                            <TouchableOpacity
                                onPress={() => {
                                    setToCityModalVisible(!isToCityModalVisible);
                                }}
                            >
                                <MaterialIcons name="arrow-drop-down" size={35} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View>
                    <View
                        style={{
                            height: 70,
                            width: "100%",
                        }}
                    >
                        <Text style={styles.title}>Departure Date</Text>
                        <View style={styles.dateContainer}>
                            <TextInput
                                value={moment(selectedDepartureDate).format("DD - MM - YYYY")}
                                editable={false}
                                placeholder="Select Date"
                                style={{ color: "black", fontWeight: "600" }}
                            />
                            <TouchableOpacity onPress={showDepartureDatePicker}>
                                <Icon name="calendar" size={23} />
                            </TouchableOpacity>

                            {isDepartureDatePickerVisible && (
                                <DatePicker
                            
                                    modal
                                    open={isDepartureDatePickerVisible}
                                    minimumDate={new Date()} // Today's date
                                    // maximumDate={new Date().setFullYear(new Date().getFullYear() + 1)} // One year from today
                                    date={selectedDepartureDate}
                                    mode="date"
                                    placeholder="select date"
                                    onConfirm={(date) => {
                                        setDepartureDatePickerVisible(false);
                                        setSelectedDepartureDate(date);
                                    }}
                                    onCancel={() => {
                                        setDepartureDatePickerVisible(false);
                                    }}
                                    onDateChange={(date) => {
                                        setSelectedDepartureDate(date);
                                    }}
                                />
                            )}
                        </View>
                    </View>
                </View>
            </View>

            <Modal
                visible={isFromCityModalVisible}
                animationType="slide"
                transparent={true}
                onDismiss={() => {
                    setFromCityModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>
                    <Text style={styles.modalHeading}>SELECT CITY FROM HERE</Text>
                    <FlatList
                        data={CityData}
                        keyExtractor={(item, index) => item + index}
                        style={styles.cityFlatlist}
                        ItemSeparatorComponent={
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "grey",
                                }}
                            />
                        }
                        renderItem={({ item }) => (
                            <View style={styles.flatlistItemView}>
                                <TouchableOpacity onPress={() => selectFromCity(item)}>
                                    <Text style={styles.citiesText}>{item.city}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </Modal>

            <Modal
                visible={isToCityModalVisible}
                animationType="slide"
                transparent={true}
                onDismiss={() => {
                    setToCityModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>
                    <Text style={styles.modalHeading}>SELECT CITY FROM HERE</Text>
                    <FlatList
                        data={CityData}
                        keyExtractor={(item, index) => item + index}
                        style={styles.cityFlatlist}
                        ItemSeparatorComponent={
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "grey",
                                }}
                            />
                        }
                        renderItem={({ item }) => (
                            <View style={styles.flatlistItemView}>
                                <TouchableOpacity onPress={() => selectToCity(item)}>
                                    <Text style={styles.citiesText}>{item.city}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </Modal>
            <TouchableOpacity
                style={[
                    styles.buttonStyle,
                    {
                        backgroundColor:
                            selectedFromCity && selectedToCity && selectedDepartureDate
                                ? "green"
                                : "grey",
                    },
                ]}
                disabled={
                    selectedFromCity && selectedToCity && selectedDepartureDate
                        ? false
                        : true
                }
                onPress={() => {
                    props.navigation.navigate("FindTrain", {
                        fromcity: selectedFromCity,
                        tocity: selectedToCity,
                    });
                }}
            >
                <Text style={styles.footerButtonText}>FIND TRAIN</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },
    image: {
        flex: 1,
    },
    heading: {
        alignItems: "center",
        marginBottom: 15,
    },
    innercontainer: {
        marginHorizontal: 20,
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
    },
    fromView: { width: "44%" },
    ChooseCityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    SelectionView: {
        backgroundColor: "white",
        padding: 10,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 4,
    },
    title: {
        color: "grey",
        marginTop: 5,
    },
    swipeImage: {
        height: 30,
        width: 30,
        marginTop: 20,
    },
    modalHeading: {
        backgroundColor: "white",
        width: "50%",
        textAlign: "center",
        marginVertical: 10,
        color: "black",
        fontWeight: "bold",
        padding: 5,
    },
    cityFlatlist: {
        width: "70%",
        alignSelf: "center",
    },
    citiesText: {
        marginHorizontal: 20,
        textAlign: "center",
        color: "black"
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(52, 52, 52, 0.8)",
    },
    flatlistItemView: { padding: 10, backgroundColor: "#dcdcdc" },
    dateContainer: {
        backgroundColor: "white",
        padding: 10,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 4,
    },
    footerButtonText: {
        borderWidth: 1.5,
        borderColor: "grey",
        color: "white",
        fontWeight: "bold",
        padding: 10,
        textAlign: "center",
    },
    buttonStyle: {
        // backgroundColor: "green",
        width: "45%",
        marginVertical: 50,
        alignSelf: "center",
    },
    disabledButton: {
        // backgroundColor: 'lightgray',
    },
});

export default CitySelection;
