import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment/moment';

const calculateStartDate = (endDate, durationInDays) => {
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const durationInMilliseconds = durationInDays * millisecondsPerDay;

    const endDateObject = new Date(endDate);
    const startDateTimestamp = endDateObject.getTime() - durationInMilliseconds;

    const startDate = new Date(startDateTimestamp);

    // return startDate.toISOString().split('T')[0]; // Format as "YYYY-MM-DD"
    return moment(startDate).format("YYYY-MM-DD")
};


const FindStartDate = () => {

    const endDate = "2023-09-10"; // Replace with your end date
    const durationInDays = 20; // Replace with your duration in days

    const startDate = calculateStartDate(endDate, durationInDays);




    return (
        <View>
            <Text>End Date: {endDate}</Text>
            <Text>Duration: {durationInDays} days</Text>
            <Text>Start Date: {startDate}</Text>
        </View>
    )
};

export default FindStartDate;
