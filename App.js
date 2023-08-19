import React from 'react';
import { View, Button } from 'react-native';
import { Adjust, AdjustEvent } from 'react-native-adjust';


const App = () => {

  const trackEventWithParameters = (eventName) => {
    var adjustEvent = new AdjustEvent(eventName);
    const callbackParameters = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
      key4: 'value4',
      key5: 'value5',
    };

    for (const key in callbackParameters) {
      // if (callbackParameters.hasOwnProperty(key)) {
      const value = callbackParameters[key];
      adjustEvent.addCallbackParameter(key, value);
      // }
    }
    console.log('adjustEvent', adjustEvent);
    Adjust.trackEvent(adjustEvent);
  };

  return (
    <View>
      <Button title="Track Event" onPress={() => { trackEventWithParameters("abc123") }} />
    </View>
  );
};

export default App;
