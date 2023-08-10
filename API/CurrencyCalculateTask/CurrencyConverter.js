import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const CurrencyConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [notes, setNotes] = useState({});
  const [totalValue, setTotalValue] = useState(0);

  // console.log('inputValue===>', inputValue);
  const currencyNotes = [500, 200, 100, 50, 20, 10, 5, 2, 1];

  const convertToNotes = (value) => {
    const noteCounts = {};
    let remainingValue = value;

    for (const note of currencyNotes) {
      // console.log('currencyNotes===>',currencyNotes );
      // console.log('note===>',note );

      if (remainingValue >= note) {

        const count = Math.floor(remainingValue / note);
        console.log('remainingValue===>', remainingValue);
        console.log('count====>', count);

        noteCounts[note] = count;
        console.log('noteCounts[note]====>', noteCounts[note]);

        remainingValue -= note * count;
      }
    }
    console.log('notecounts===>', noteCounts);
    return noteCounts;

  };

  const handleConvertAndMultiply = () => {
    const parsedValue = parseInt(inputValue);
    console.log('parsedvalue===>',Number.isNaN());

    if (Number.isNaN(parsedValue)) {
      const convertedNotes = convertToNotes(parsedValue);
      setNotes(convertedNotes);

      console.log('convertedNotes===>', convertedNotes);

      let multipliedValue = 0;
      for (const note in convertedNotes) {
        multipliedValue += note * convertedNotes[note];
      }
      setTotalValue(multipliedValue);
      setInputValue('')
    }
    else {
      Alert.alert('Number not exist')
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="Enter a number"
        keyboardType="number-pad"
        value={inputValue}
        style={{ backgroundColor: 'white', padding: 10, width: '50%', marginVertical: 20, borderWidth: 1, }}
        onChangeText={(text) => setInputValue(text)}
      />
      <Button title="Convert" onPress={handleConvertAndMultiply} />
      <Text style={{ fontSize: 15, color: 'black', marginTop: 40 }}>Converted Notes: {JSON.stringify(notes)}</Text>
      <Text style={{ fontSize: 15, color: 'black', marginTop: 10 }}>Total Multiplied Value: {totalValue}</Text>
    </View>
  );
};

export default CurrencyConverter;