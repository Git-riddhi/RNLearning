import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, PermissionsAndroid } from 'react-native';

import ImagePicker from 'react-native-image-crop-picker'

const ImagePickerBox = ({ image, setImage }) => {
    // const [images, setImages] = useState([]);

    // const requestGalleryPermission = async () => {
    //     try {
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    //             {
    //             }
    //         );
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             console.log("Photos permission given");
    //             OpenGallery()
    //         } else {
    //             console.log("Photos permission denied");
    //         }
    //     } catch (error) {
    //         console.warn(error)
    //     }
    // }


    const OpenGallery = () => {
        try {
            ImagePicker.openPicker({ title: 'Select Image' }, response => {
                if (!response.didCancel && !response.error) {
                    setImage(response.uri);
                }
            })
        } catch (error) {
            console.log('error--', error)
        }
    }

    // const handleImagePicker = () => {
    //     ImagePicker.showImagePicker({ title: 'Select Image' }, response => {
    //         if (!response.didCancel && !response.error) {
    //             setImage(response.uri);
    //         }
    //     });
    // };

    return (
        <View>
            <TouchableOpacity onPress={OpenGallery}>
                {image ? (
                    <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                ) : (
                    <View
                        style={{
                            width: 100,
                            height: 100,
                            backgroundColor: 'lightgray',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text>+</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

export default ImagePickerBox;
