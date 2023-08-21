import React, { useState } from 'react';
import { Button, FlatList, ImageBackground, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { CityData } from './CityData';


const TrainSelection = (props) => {

    const [selectedDepartureDate, setSelectedDepartureDate] = useState(new Date());
    const [selectedReturnDate, setSelectedReturnDate] = useState(new Date());

    const [isDepartureDatePickerVisible, setDepartureDatePickerVisible] = useState(false);
    const [isReturnDatePickerVisible, setReturnDatePickerVisible] = useState(false);

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);

    const showDepartureDatePicker = () => {
        setDepartureDatePickerVisible(true);
    };
    const showReturnDatePicker = () => {
        setReturnDatePickerVisible(true);
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

    const selectCity = (city) => {
        setSelectedCity(city);
        setModalVisible(false)
        // closeModal();
    };

    return (
        <View style={styles.container}>
            {/* <ImageBackground
                source={require("../../assets/colorBg.jpg")}
                resizeMode="cover"
                style={styles.image}
            > */}
            <View style={styles.innercontainer}>
                <Text style={styles.title}>From</Text>

                <View style={styles.SelectionView}>
                    {/* {selectedCity ? <Text>{selectedCity}</Text> : <Text>Select</Text>} */}
                    <Text>Select</Text>
                    <TouchableOpacity onPress={() => { setModalVisible(!isModalVisible) }}>

                        <MaterialIcons name='arrow-drop-down' size={35} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>To</Text>

                <View style={styles.SelectionView}>
                    <Text>Delhi</Text>
                    <TouchableOpacity onPress={() => { setModalVisible(!isModalVisible) }}>
                        <MaterialIcons name='arrow-drop-down' size={35} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Travellers</Text>

                <View style={styles.SelectionView}>
                    <Text>1 Adult</Text>
                    <MaterialIcons name='arrow-drop-down' size={35} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{
                        height: 70,
                        width: '40%',
                    }} >

                        <Text style={styles.title}>Departure Date</Text>
                        <View style={styles.dateContainer}>
                            <TextInput
                                value={moment(selectedDepartureDate).format("DD-MM-YYYY")}

                                editable={false}
                            />
                            <TouchableOpacity onPress={showDepartureDatePicker}  >
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
                                        setDepartureDatePickerVisible(false)
                                        setSelectedDepartureDate(date)
                                    }}
                                    onCancel={() => {
                                        setDepartureDatePickerVisible(false)
                                    }}
                                    onDateChange={(date) => {
                                        setSelectedDepartureDate(date)
                                    }}
                                />
                            )}

                        </View>
                    </View>

                    <View style={{
                        height: 70,
                        width: '40%',
                    }} >



                        <Text style={styles.title}>Return Date</Text>
                        <View style={styles.dateContainer}>
                            <TextInput
                                value={moment(selectedReturnDate).format("DD-MM-YYYY")}

                                editable={false}
                            />
                            <TouchableOpacity onPress={showReturnDatePicker}  >
                                <Icon name="calendar" size={20} />

                            </TouchableOpacity>

                            {isReturnDatePickerVisible && (
                                <DatePicker
                                    modal
                                    open={isReturnDatePickerVisible}
                                    date={selectedReturnDate}
                                    mode="date"
                                    placeholder="select date"
                                    // format= {moment(new Date()).format("YYYY-MM-DD")}
                                    minimumDate={new Date()}
                                    // maximumDate={new Date("2023-12-31")}
                                    onConfirm={(date) => {
                                        setReturnDatePickerVisible(false)
                                        setSelectedReturnDate(date)
                                    }}
                                    onCancel={() => {
                                        setReturnDatePickerVisible(false)
                                    }}
                                    onDateChange={(date) => {
                                        setSelectedReturnDate(date);
                                    }}
                                />
                            )}
                        </View>
                    </View>
                </View>
            </View>

            <Modal
                visible={isModalVisible}
                style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
                animationType="slide"
                transparent={true}
                onRequestClose={() => { setModalVisible(false) }}
            >
                <View>
                    <FlatList
                        data={CityData}
                        keyExtractor={(item, index) => item + index}
                        style={{ width: '80%', alignSelf: 'center' }}
                        ItemSeparatorComponent={
                            <View style={{
                                height: 1,
                                // width: "100%",
                                backgroundColor: "grey",
                            }} />
                        }
                        renderItem={({ item }) => (
                            <View style={{ padding: 10, backgroundColor: 'lightgrey' }}>

                                <TouchableOpacity onPress={() => selectCity(item)} >
                                    <Text style={{ marginHorizontal: 20 }}>{item.city}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </Modal>
            <View style={{ marginVertical: 100, flex: 1, alignItems: 'center' }}>
                <Button title='Find My Train' onPress={() => { props.navigation.navigate('FindTrain') }} />
            </View>




        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
        // justifyContent: "center",
    },
    image: {
        flex: 1,
        // justifyContent: "center",
    },
    innercontainer: {
        marginHorizontal: 20,
    },
    SelectionView: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-between',
        elevation: 4
    },
    title: {
        color: 'grey',
        marginTop: 5
    },
    dateContainer: {
        backgroundColor: 'white',

        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 4
    }

})

export default TrainSelection;
