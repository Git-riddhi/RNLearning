import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';

const DateArray = [
    { id: 1, endDate: '10 Sept 2023', duration: '20 Days', productName: '1 GB' },
    { id: 2, endDate: '21 June 2024', duration: '60 Days', productName: '4 GB' },
    { id: 3, endDate: '4 October 2023', duration: '2 Days', productName: 'Tarif L' },
];

const FindRemainingDays = () => {
    const updatedDateArray = DateArray.map(item => {

        const endDate = moment(item.endDate, 'D MMMM YYYY');
        console.log('endDate===>', endDate);

        const duration = parseInt(item.duration, 'days');
        console.log('duration===>', duration);

        const startDate = endDate.subtract(duration, 'days');
        console.log('startDate===>', startDate);

        // var a = moment([2007, 0, 29]);
        // var b = moment([2007, 0, 28]);
        // console.log("difference between start and end ===",a.diff(b, 'days'));

        const remainingDays = moment().diff(startDate, 'days');
        // console.log('remainingDays===>', remainingDays);

        // console.log('item ====>', item);

        return {
            ...item,
            startDate: startDate.format('D MMMM YYYY'),
            remainingDays,
        };
    });

    return (
        <View>
            {updatedDateArray.map(item => (
                <View key={item.id} style={{ marginVertical: 20, alignSelf: 'center' }}>
                    <Text style={{ color: 'black' }}>Product Name : {item.productName}</Text>
                    <Text style={{ color: 'black' }}>Start Date : {item.startDate}</Text>
                    <Text style={{ color: 'black' }}>End Date : {item.endDate}</Text>
                    <Text style={{ color: 'black' }}>Duration : {item.duration}</Text>
                    <Text style={{ color: 'black' }}>Remaining Days : {item.remainingDays}</Text>
                </View>
            ))}
        </View>
    );
};

export default FindRemainingDays;
