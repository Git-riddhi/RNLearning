import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Alert,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Qrcode from 'react-native-qrcode-svg';
import RNFetchBlob from 'rn-fetch-blob';

const DownloadQRScreen = () => {
    const [qrCodeText, setQrCodeText] = useState('');

    const [qrCodeRef, setQrCodeRef] = useState(null);

    const downloadQrcode = () => {
        try {
            // alert('hello');
            qrCodeRef.toDataURL(async data => {
                console.log(data);
                const path =
                    RNFetchBlob.fs.dirs.DownloadDir +
                    `/${qrCodeText
                        .replace('http', '')
                        .replace('://', 'a')
                        .replace('.', '_')
                        .slice(0, 200)}.jpg`;

                await RNFetchBlob.fs.writeFile(path, data, 'base64');

                console.log('Downloaded Successfully');

                Alert.alert('Downloaded Successfully');
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.textInputView}>
                    <TextInput
                        placeholder="Enter Your Data"
                        style={styles.textInput}
                        onChangeText={text => setQrCodeText(text)}
                        value={qrCodeText}
                    />
                </View>

                <View style={styles.qrcode}>
                    <Qrcode
                        value={qrCodeText ? qrCodeText : 'https://www.google.com/'}
                        size={300}
                        logo={require('../../assets/letterV.png')}
                        logoSize={60}
                        getRef={ref => setQrCodeRef(ref)}
                    // color='red'
                    />
                </View>
                <View style={styles.btn}>
                    <Button title="Download Qrcode" onPress={() => downloadQrcode()} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-around',
        // backgroundColor: 'black'
    },
    textInputView: {
        alignItems: 'center',
        margin: 30,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '80%',
    },
    qrcode: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        margin: 30
    }
});

export default DownloadQRScreen;
