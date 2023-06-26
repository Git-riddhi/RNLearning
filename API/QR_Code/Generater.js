import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import React, { useState,useRef } from 'react';
import QRCode from 'react-native-qrcode-svg';
import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';
// import ViewShot from "react-native-view-shot";


const GeneratorScreen = () => {
  const [QRvalue, setQRValue] = React.useState('');
  const [QRLogo, setQRLogo] = React.useState('');
  const [QRImage, setQRImage] = React.useState('');

  const [filePath, setFilePath] = useState('');
  const ref = React.useRef();

  // const viewShot = useRef(null);

  const GenerateQR = () => {
    ref.current.toDataURL(data => {
      setQRImage('data:image/png;base64,' + data);
      console.log('data =====>', data );
    });
  };

  const handleSave = async () => {



    if (Platform.OS === 'android') {
      var isReadGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
    }
    if (isReadGranted === PermissionsAndroid.RESULTS.GRANTED) {
      const dirs = RNFetchBlob.fs.dirs
      console.log("save function call", dirs)

      var qrcode_data = QRImage.split('data:image/png;base64,');
      const filePath = dirs.DownloadDir + "/" + 'QRCode' + new Date().getSeconds() + '.png'

      setFilePath(filePath)

      RNFetchBlob.fs.writeFile(filePath, qrcode_data[0], '.png')
        .then(() => console.log("Saved successfully"))
        .catch((errorMessage) => console.log(errorMessage))
    }
  }

  const handleShare = async () => {
    const options = {
      title: 'Share is your QRcode',
      url: filePath,
    };

    try {
      console.log("options.url =====> ", options.url)
      await Share.open(options);

    } catch (err) {
      console.log(err);
    }
  };


  return (
    <View style={styles.sectionContainer}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Generate QRCode</Text>

        <View style={styles.row}>
          <TextInput
            placeholder="Add Value to QRCode"
            style={styles.textInput}
            autoCapitalize="none"
            value={QRvalue}
            onChangeText={setQRValue}
          />
          <TextInput
            placeholder="Add Logo URL"
            style={styles.textInput}
            autoCapitalize="none"
            value={QRLogo}
            onChangeText={setQRLogo}
          />
        </View>

        {/* <ViewShot ref={viewShot} options={{ width: 100, height: 100, format: "jpg", quality: 1.0 }}>
          <View style={{ padding: 10, backgroundColor: '#FFFFFF' }}>
          <QRCode
            size={300}
            value={QRvalue ? QRvalue : 'https://www.google.com/'}
            logo={{ uri: QRLogo }}
            // logo={require('/home/hb/Desktop/MyProject/assets/letterV.png')}
            logoSize={60}
            logoBackgroundColor="transparent"
            getRef={ref}
          />
          </View>
        </ViewShot> */}


        <View style={styles.QRView}>
          <QRCode
            size={300}
            value={QRvalue ? QRvalue : 'https://www.google.com/'}
            logo={{ uri: QRLogo }}
            // logo={require('/home/hb/Desktop/MyProject/assets/letterV.png')}
            logoSize={60}
            logoBackgroundColor="transparent"
            getRef={ref}
          />
        </View>


        <TouchableOpacity style={styles.newButton} onPress={() => GenerateQR()}>
          <Text
            style={styles.sectionDescription}>
            Generate QR
          </Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity style={styles.Button} onPress={() => handleShare()}>
            <Text
              style={styles.sectionDescription}>
              Share QR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Button} onPress={() => handleSave()}>
            <Text
              style={styles.sectionDescription}>
              Save QR
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },

  sectionTitle: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: '600',
    textAlign: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  textInput: {
    padding: 10,
    // textAlign: 'center',
    marginHorizontal: 5,
    marginVertical: 20,
    borderRadius: 30,
    borderColor: 'black',
    width: 170,
    borderWidth: 2,

  },
  QRView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionDescription: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  newButton: {
    backgroundColor: 'deepskyblue',
    width: 200,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  Button: {
    width: 100,
    backgroundColor: 'deepskyblue',
    padding: 10,
    borderRadius: 20,
  },
});

export default GeneratorScreen;
