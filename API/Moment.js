import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native'
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

    const [currentWeek, setCurrentWeek] = useState('')
    const [currentMonth, setCurrentMonth] = useState('')
    const [currentDate, setCurrentDate] = useState('')
    const [fromDate1, setFromDate1] = useState(new Date())


    // const today = new Date();
    // const currentWeek = today.toDateString()
    //  const begginingOfCurrentWeek = today.moment(date)
    //  console.log('today',today);


    const thisWeek = () => {
        var currentWeek = moment().week()
        setCurrentWeek(`currentWeek :-  ${moment().week(currentWeek + 1).format("YYYY-MM-DD")}`)
    }

    const thisMonth = () => {
        var currentMonth = moment().month()
        setCurrentMonth(`currentMonth :-  ${moment().month(currentMonth + 1).format("YYYY-MM-DD")}`)
    }

    const todayDate = () => {
        var currentDate = new Date()
        setCurrentDate(`Today is :- ${currentDate.toDateString()}`)
    }

    const fromDateFunction = () => {
        setOpen(!open)
        setFromDate1(fromDate1)
        console.log('fromDate1', fromDate1)

    }

    // const endOfWeek = today.endOf('week');


    // const moment = require('moment');

    // console.log("Current Date:", moment().toString())
    // console.log("Current week is:", moment().week())

    // let week1 = moment().week(1);
    // console.log(
    //     "Moment with Week of 1 is:",
    //     week1.toString()
    // )

    // let d = new Date();
    // let date1 = d.getDate();
    // let day = d.getDay();
    // let currentWeek = Math.ceil((date1 + 6 - day) / 7);

    // console.log("current week :", currentWeek)


    return (
        < View >

            <Button title="This Week" onPress={() => thisWeek()}
            />
            <Text >{currentWeek}</Text>
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

            {/* <Text style={styles.textStyle} > {age >= 18 ? moment(date).format("DD-MM-YYYY") : "You are not eligible."}
            </Text> */}

            {/* <Text style={styles.textStyle} > {age >= 18 ? String(date) : "You are not eligible."}
            </Text> */}



            <Button title="This Month" onPress={() => thisMonth()} />
            <Text >{currentMonth}</Text>
            <DatePicker
                // style={styles.datePickerStyle}
                modal
                open={open2}
                date={date} // Initial date from state
                mode="date" // The enum of date, datetime and time
                placeholder="select date"
                // format= {moment(new Date()).format("YYYY-MM-DD")}
                // minimumDate={new Date("2016-12-31")}
                // maximumDate={new Date("2023-12-31")}
                onConfirm={(date) => {
                    setOpen2(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen2(false)
                }}
                onDateChange={(date) => {
                    setDate(date);
                }}
            />

            {/* <Text style={styles.textStyle} > {age >= 18 ? moment(date).format("DD-MM-YYYY") : "You are not eligible."}
            </Text> */}

            {/* <Text style={styles.textStyle} > {age >= 18 ? String(date) : "You are not eligible."}
            </Text> */}



            <Button title="Next Month" onPress={() => todayDate()} />
            <Text >{currentDate}</Text>

            <DatePicker
                // style={styles.datePickerStyle}
                modal
                open={open3}
                date={date} // Initial date from state
                mode="date" // The enum of date, datetime and time
                placeholder="select date"
                // format= {moment(new Date()).format("YYYY-MM-DD")}
                // minimumDate={new Date("2016-12-31")}
                // maximumDate={new Date("2023-12-31")}
                onConfirm={(date) => {
                    setOpen3(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen3(false)
                }}
                onDateChange={(date) => {
                    setDate(date);
                }}
            />

            {/* <Text style={styles.textStyle} > {age >= 18 ? moment(date).format("DD-MM-YYYY") : "You are not eligible."}
            </Text> */}

            {/* <Text style={styles.textStyle} > {age >= 18 ? String(date) : "You are not eligible."}
            </Text> */}

        </View>

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
        padding: 5,
    }
});