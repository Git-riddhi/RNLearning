import { View, Text, StyleSheet, Dimensions, Button, Share } from 'react-native'
import React, { useState } from 'react'
import Pdf from 'react-native-pdf';
import RNFetchBlob from 'rn-fetch-blob';
import { PermissionsAndroid } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const PdfFile = () => {

    // const url = 'https://icseindia.org/document/sample.pdf'; // Replace with your PDF file URL

    // const downloadPDF = () => {

    //     RNFetchBlob.config({
    //         fileCache: true,
    //         appendExt: 'pdf',
    //     })
    //         .fetch('GET', url)
    //         .then((res) => {
    //             // File path is stored in `res.path()`
    //             console.log('File downloaded:', res.path());
    //         })
    //         .catch((error) => {
    //             console.log('Error downloading file:', error);
    //         });
    // };

    const [visible, setVisible] = useState(false)
    const [file, setFile] = useState('')

    const requestStoragePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission',
                        message: 'App needs access to storage to download the PDF.',
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else {
            return true;
        }
    };

    const downloadPdf = async () => {
        const isStoragePermissionGranted = await requestStoragePermission();
        if (isStoragePermissionGranted) {
            const { config, fs } = RNFetchBlob;
            const dirs = RNFetchBlob.fs.dirs;
            const { DocumentDir } = fs;
            const fileUrl = 'https://icseindia.org/document/sample.pdf'; // Replace with your actual PDF URL

            const options = {
                fileCache: true,
                addAndroidDownloads: {
                    title: "PDF",
                    useDownloadManager: true,
                    notification: true,
                    path: `${dirs.DownloadDir}/somefile.pdf`,
                    // path: dirs.DownloadDir + `${options}` + '.pdf', // Replace with your desired file path and name
                    description: 'Downloading PDF file.',
                },
            };

            config(options)
                .fetch('GET', fileUrl)
                .then((res) => {
                    // File downloaded successfully
                    console.log('File downloaded:', res.path());
                })
                .catch((error) => {
                    // Error occurred while downloading the file
                    console.error('Error downloading file:', error);
                });
        } else {
            console.log('Storage permission denied.');
        }
    };

    const sharePdf = async () => {
        const options = {
          title: 'Share Pdf',
          url: 'https://icseindia.org/document/sample.pdf',
        };
    
        try {
          console.log("options.url =====> ", options.url)
          await Share.open(options);
    
        } catch (err) {
          console.log('error===>', err);
        }
      };

    return (
        <View style={styles.pdfViewStyle}>
            <Text style={styles.textStyle}>PDF FILE</Text>
            <Pdf
                trustAllCerts={false}
                source={{ uri: 'https://icseindia.org/document/sample.pdf', cache: true }}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    // console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log("error=======", error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf} />

            <View style={styles.downloadBtn}>
                <Button onPress={downloadPdf} title="Download PDF" color={'green'} />
            </View>

            <View style={styles.ShareBtn}>
                <Button onPress={sharePdf} title="Share PDF" color={'green'} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    pdf: {
        width: deviceWidth - 20,
        height: deviceHeight / 1.7,
        alignSelf: 'center',
    },
    pdfViewStyle: {
        flex: 1,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 30,
        marginVertical: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    downloadBtn: {
        marginTop: 40
    },
    ShareBtn:{
        marginTop: 20
    }
})
export default PdfFile