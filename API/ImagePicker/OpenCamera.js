
import React, { useState } from 'react';
import { PermissionsAndroid, View, Image, Text, Dimensions, StyleSheet, Button } from 'react-native';
import ImagePicker, {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-picker'

const screenWidth = Dimensions.get('screen').width;

const openCamera = () => {
    const [pickerResponse, setPickerResponse] = useState(null);

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            const grantedGallery = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "App Gallery Permission",
                    message: "App needs access to your photos",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED && grantedGallery === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
                LaunchCamera()
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }

    }
    const LaunchCamera = () => {
        try {
            launchCamera({
                mediaType: 'photo'
            }, (value) => {
                console.log('photos-value', value)
                setPickerResponse(value.assets[0].uri)

            })
        } catch (error) {
            console.log('error--', error)
        }

    }

    return (
        <View style={{ flex: 1, }}>

            <Button
                style={{ width: screenWidth / 2, alignSelf: 'center', margin: 10 }}
                title='Take A Photo'
                color="blue"
                onPress={() => requestCameraPermission()}
            />
            {
                pickerResponse ?
                    <Image
                        style={{ margin: 20 }}
                        width={100}
                        height={100}
                        source={{ uri: pickerResponse }} /> : null
            }


        </View>
    )
}


const styles = StyleSheet.create({

    textStyle: {
        padding: 10,
        color: 'black',
        textAlign: 'center',
    },

    imageStyle: {
        width: 100,
        height: 100,
        margin: 5,
    },
});
export default openCamera;
