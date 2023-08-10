import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment/moment';

const DateArray = [
  { id: 1, endDate: '10 Sept 2023', duration: '20 Days', productName: '1 GB' },
  { id: 2, endDate: '21 June 2024', duration: '60 Days', productName: '4 GB' },
  { id: 3, endDate: '04/10/2023', duration: '2 Days', productName: 'Tarif L' }
];

const FindRemainingDaysAndStartDate = () => {
  const [remainingDaysArray, setRemainingDaysArray] = useState([]);

  useEffect(() => {

    const updatedArray = DateArray.map(item => {

      const endDate = moment(item.endDate, ['DD MMM YYYY', 'DD/MM/YYYY']);
      // console.log('endDate ====>', endDate);

      const duration = parseInt(item.duration, 'days')
      // console.log('duration===>', duration);

      const startDate = moment(item.endDate, ['DD MMM YYYY', 'DD/MM/YYYY']).subtract(duration, 'days');
      // console.log('startdate ====>', startDate);

      const remainingDays = moment().diff(startDate, 'days')
      // console.log('Todays Date ===>', moment()); // Today's Date

      return { ...item, startDate, remainingDays };
    });

    setRemainingDaysArray(updatedArray);
  }, []);

  console.log('remainingDaysArray', remainingDaysArray);

  return (
    <View>
      {remainingDaysArray.map(item => (
        <View key={item.id} style={{ marginVertical: 20, alignSelf: 'center' }}>
          <Text style={{ color: 'black' }}>Product Name : {item.productName}</Text>
          <Text style={{ color: 'black' }}>Start Date: {item.startDate.format('DD MMM YYYY')}</Text>
          <Text style={{ color: 'black' }}>End Date : {item.endDate}</Text>
          <Text style={{ color: 'black' }}>Duration : {item.duration}</Text>
          <Text style={{ color: 'black' }}>Remaining Days : {item.remainingDays}</Text>
        </View>
      ))}
    </View>
  );
};

export default FindRemainingDaysAndStartDate;
