import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const ScannerScreen = () => {
  const onSuccess = async e => {
    try {
      // alert('done');
      console.log(e);
      await Linking.openURL(e.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView>

      <QRCodeScanner
        onRead={e => onSuccess(e)}
        // flashMode={RNCamera.Constants.FlashMode.torch}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'black',
  //   justifyContent: 'space-around',
  // },
  
});

export default ScannerScreen;
