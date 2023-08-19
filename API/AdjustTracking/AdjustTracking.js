import React from "react";
import { View, Text } from "react-native";
import { Adjust, AdjustEvent, AdjustConfig } from 'react-native-adjust';

const AdjustTracking = () => {

  var adjustConfig = new AdjustConfig("mevag4b7nc3k", 'dev');
  Adjust.create(adjustConfig);
  console.log('adjustConfig ===>', adjustConfig);


  var adjustEvent = new AdjustEvent("abc123");

  adjustEvent.addCallbackParameter('key1', 'value1');
  adjustEvent.addCallbackParameter('key2', 'value2');
  console.log('adjustEvent ===>', adjustEvent);

  Adjust.trackEvent(adjustEvent);

  return (
    <View>
      <Text>
        Hiii
      </Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   mainContainer: {
//     backgroundColor: "grey",
//     flex: 1,
//   },

// });

export default AdjustTracking;
