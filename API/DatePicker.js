import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import DatePicker from 'react-native-date-picker'
import moment from 'moment';

export default () => {
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [datetime, setDatetime] = useState(new Date())

    const age = (new Date().getFullYear() - date.getFullYear())

    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    

    // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    // const [birthDate, setBirthDate] = useState('');

    // const showDatePicker = () => {
    //     setDatePickerVisibility(true);
    // };

    // const hideDatePicker = () => {
    //     setDatePickerVisibility(false);
    // };

    // const handleConfirm = date => {
    //     setBirthDate(date);
    //     hideDatePicker();
    // };

    // useEffect(() => {
    //     var date = new Date().getDate(); //Current Date
    //     var month = new Date().getMonth() + 1; //Current Month
    //     var year = new Date().getFullYear(); //Current Year
    //     var hours = new Date().getHours(); //Current Hours
    //     var min = new Date().getMinutes(); //Current Minutes
    //     var sec = new Date().getSeconds(); //Current Seconds
    //     setDate(
    //         date + '/' + month + '/' + year
    //         + ' ' + hours + ':' + min + ':' + sec
    //     );
    // }, []);

    return (
        <>

            <Button title="Select Date" onPress={() => setOpen1(true)} />

            <DatePicker
                // style={styles.datePickerStyle}
                modal
                open={open1}
                date={date} // Initial date from state
                mode="date" // The enum of date, datetime and time
                placeholder="select date"
                // format= {moment(new Date()).format("YYYY-MM-DD")}
                // minimumDate={new Date("2016-12-31")}
                // maximumDate={new Date("2023-12-31")}
                onConfirm={(date) => {
                    setOpen1(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen1(false)
                }}
                onDateChange={(date) => {
                    setDate(date);
                }}
            />

            <Text style={styles.textStyle} > {age >= 18 ? moment(date).format("DD-MM-YYYY") : "You are not eligible."}
            </Text>

            <Text style={styles.textStyle} > {age >= 18 ? String(date) : "You are not eligible."}
            </Text>


            {/* <TouchableOpacity onPress={open1}>
                <TextInput style={{
                    fontSize: 16,
                    paddingVertical: 10,
                    color: 'black',
                    borderWidth: 2
                }}
                    numberOfLines={1}
                    // editable={false}
                    value= {String(date)}
                    placeholder="Choose Your Date of Birth"
                    onFocus={() => { setOpen1(true) }} />

                <DatePicker
                    // style={styles.datePickerStyle}
                    modal
                    open={open1}
                    date={date} // Initial date from state
                    mode="date" // The enum of date, datetime and time
                    placeholder="select date"
                    // dateFormat="DD-MM-YYYY"
                    minimumDate={new Date("2016-12-31")}
                    maximumDate={new Date("2023-12-31")}
                    onConfirm={(date) => {
                        setOpen1(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen1(false)
                    }}
                    onDateChange={(date) => {
                        setDate(date);
                    }}
                /> */}


            {/* </TouchableOpacity> */}



            {/* <DatePicker
                modal
                mode='date'
                open={open1}
                date={date}
                // onDateChange={new Date("2016-12-31")}
                minimumDate={new Date("2016-12-31")}
                onConfirm={(date) => {
                    setOpen1(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen1(false)
                }}
            /> */}

            {/* 
            <Button title="Select Time" onPress={() => setOpen2(true)} />
            <DatePicker
                modal
                mode='time'
                open={open2}
                date={time}
                onConfirm={(time) => {
                    setOpen2(false)
                    setDate(time)
                }}
                onCancel={() => {
                    setOpen2(false)
                }}
            /> */}

            {/* <Button title="Select Date & Time" onPress={() => setOpen3(true)} />
            <DatePicker
                modal
                mode='datetime'
                open={open3}
                date={datetime}
                // minimumDate= {new Date("2021-12-31")}

                // maximumDate='01-01-2023'
                onConfirm={(datetime) => {
                    setOpen3(false)
                    setDate(datetime)
                }}
                onCancel={() => {
                    setOpen3(false)
                }}
            /> */}

        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },

    textStyle: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        marginVertical: 20,
        borderWidth: 2,
        padding: 10,
    }
});