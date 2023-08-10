import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';

const FindRemainingDaysUsingStaticData = () => {
  const [end, setEnd] = useState('2023-09-10'); // Replace with your end date
  const [duration, setDuration] = useState(20); // Replace with your duration in days
  const [start, setStart] = useState('');
  const [remainingDays, setRemainingDays] = useState('');

  useEffect(() => {
    const endDate = moment(end, 'YYYY-MM-DD');
    const startDate = endDate.clone().subtract(duration, 'days');
    
    setStart(startDate.format('YYYY-MM-DD'));

    const today = moment();
    const daysRemaining = startDate.diff(today, 'days');
    
    setRemainingDays(daysRemaining);
  }, [end, duration]);

  return (
    <View>
      <Text>End Date: {end}</Text>
      <Text>Duration: {duration} days</Text>
      <Text>Start Date: {start}</Text>
      <Text>Remaining Days: {remainingDays} days</Text>
    </View>
  );
};

export default FindRemainingDaysUsingStaticData;
