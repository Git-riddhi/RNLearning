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

    // const apicall = async () => {

    //     const url = 'https://irctc1.p.rapidapi.com/api/v1/searchTrain?query=190';
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'ccbf5a7fc8mshc5776dd19ccaef1p17d0e7jsnf649042ec591',
    //             'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.text();
    //         console.log(result);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // apicall()

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
                        props.navigation.navigate("CitySelection")
                    }}
                >
                    <AntDesign name="arrowleft" size={30} color={"black"} />
                </TouchableOpacity>

                <Text style={styles.headerText}>TRAIN SEARCH</Text>
                
                <View></View>
            </View>
            <View style={styles.innercontainer}>


                <View style={styles.ChooseCityContainer}>
                    <View style={{ width: "44%" }}>
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
                                style={{ height: 30, width: 30, marginTop: 20 }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: "44%" }}>
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

                <View style={{}}>
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
                            />
                            <TouchableOpacity onPress={showDepartureDatePicker}>
                                <Icon name="calendar" size={20} />
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
                                    // format= {moment(new Date()).format("YYYY-MM-DD")}
                                    // minimumDate={new Date()}
                                    // maximumDate={new Date("2023-12-31")}
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
                style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
                animationType="slide"
                transparent={true}
                onDismiss={() => {
                    setFromCityModalVisible(false);
                }}
            >
                <View>
                    <FlatList
                        data={CityData}
                        keyExtractor={(item, index) => item + index}
                        style={{ width: "80%", alignSelf: "center" }}
                        ItemSeparatorComponent={
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "grey",
                                }}
                            />
                        }
                        renderItem={({ item }) => (
                            <View style={{ padding: 10, backgroundColor: 'lightgrey' }}>
                                <TouchableOpacity onPress={() => selectFromCity(item)}>
                                    <Text style={{ marginHorizontal: 20 }}>{item.city}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </Modal>

            <Modal
                visible={isToCityModalVisible}
                style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
                animationType="slide"
                transparent={true}
                onDismiss={() => {
                    setToCityModalVisible(false);
                }}
            >
                <View>
                    <FlatList
                        data={CityData}
                        keyExtractor={(item, index) => item + index}
                        style={{ width: "80%", alignSelf: "center" }}
                        ItemSeparatorComponent={
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "grey",
                                }}
                            />
                        }
                        renderItem={({ item }) => (
                            <View style={{ padding: 10, backgroundColor: "lightgrey" }}>
                                <TouchableOpacity onPress={() => selectToCity(item)}>
                                    <Text style={{ marginHorizontal: 20 }}>{item.city}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </Modal>

            <View style={{ marginVertical: 50, flex: 1, alignItems: "center" }}>
                <Button
                    title="Find Train"
                    onPress={() => {
                        // if(selectedFromCity && selectedToCity && selectedDepartureDate)
                        // {
                        props.navigation.navigate("FindTrain", {
                            fromcity: selectedFromCity,
                            tocity: selectedToCity,
                        })
                        //  } 
                        // else {
                        //     Alert.alert('Please select city where you want to go.')
                        // }
                    }
                    }
                    color={"green"}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    image: {
        flex: 1,
    },
    innercontainer: {
        marginHorizontal: 20,
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        marginBottom: 10,
    },
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
    dateContainer: {
        backgroundColor: "white",
        padding: 10,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 4,
    },
});

export default CitySelection;
