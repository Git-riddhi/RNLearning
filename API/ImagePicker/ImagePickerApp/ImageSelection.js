import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image, StyleSheet, Text, Alert, Modal, BackHandler } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconTwo from "react-native-vector-icons/AntDesign";
import IconThree from "react-native-vector-icons/AntDesign";
import IconFour from "react-native-vector-icons/MaterialIcons";
import RNFetchBlob from 'rn-fetch-blob';
import { Button, Dialog } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { log } from 'react-native-reanimated';

const ImageSelection = (props) => {
    const [images, setImages] = useState();
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false)

    const handleBackButtonClick = () => {

        Alert.alert("Are You Sure ?", "You want to GoBack ?", [
            {
                text: "Save As Draft",
                onPress: () => {
                    saveImageAsDraft()
                },
            },
            {
                text: "GoBack", onPress: () => {
                    if (clearDraft()) {
                        props.navigation.navigate("ImageChooser")
                    }
                }
            },
            { text: "Cancel", onPress: () => console.log("Okay"), style: "cancel" },

        ]);
        console.log('backhandler');
        return true;
    }

    useEffect(() => {

        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, []);


    const handleImagePicker = async (index) => {
        try {
            const image = await ImagePicker.openPicker({
                mediaType: 'photo',
                cropping: true,
            });

            var newArray = [...images]
            newArray[index] = { ...image, ...newArray[index] }
            setImages(newArray);
            console.log('updated array ====>', newArray);


        } catch (error) {
            console.log(error);
        }
    };

    const renderBox = ({ index, item }) => {
        if (item.path) {
            return (
                <TouchableOpacity onPress={() => { openImageModal(item) }} >
                    <Image source={{ uri: item.path }} style={styles.image} />
                </TouchableOpacity>)
        } else {
            return (
                <TouchableOpacity style={styles.box} onPress={() => { handleImagePicker(index) }}>
                    <Icon name="plus" size={30} color="white" />
                </TouchableOpacity>
            );
        }
    };

    const downloadImage = async () => {
        const url = 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg';
        const imagePath = `${RNFetchBlob.fs.dirs.DownloadDir}/image.jpg`;

        console.log('selectedImage.uri', selectedImage.uri);

        try {

            const response = await RNFetchBlob.config({
                fileCache: true,
                path: imagePath,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    mediaScannable: true,
                    title: 'Image Download',
                    description: 'Downloading image...',
                    mime: 'image/jpeg',
                    path: imagePath,
                },
                indicator: true,

            }).fetch('GET', url);
            // console.log('response ====>', response);


        } catch (error) {
            console.error('Image download error:', error);
        }
    };



    const openImageModal = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };


    useEffect(() => {
        showDraftImage();
    }, []);

    const showDraftImage = async () => {
        try {
            const getDraftImage = await AsyncStorage.getItem('draftImage');
            if (getDraftImage !== undefined && getDraftImage !== null) {
                setImages(JSON.parse(getDraftImage));
            }
            else {
                setImages([
                    {
                        id: 1
                    },
                    {
                        id: 2
                    },
                    {
                        id: 3
                    },
                    {
                        id: 4
                    },
                    {
                        id: 5
                    },
                    {
                        id: 6
                    }

                ])
            }
            console.log('draft image get ====>', getDraftImage);
        } catch (error) {
            console.log(error);
        }
    };


    const saveImageAsDraft = async () => {

        try {
            console.log('setitem ===>', JSON.stringify(images));
            await AsyncStorage.setItem('draftImage', JSON.stringify(images));
            props.navigation.navigate('ImageChooser')

            // console.log('setitem ===>', JSON.stringify(images));
        } catch (error) {
            console.log('store time error=====>', error);
        }

    };

    const clearDraft = async () => {
        try {
            await AsyncStorage.removeItem('draftImage');
            console.log('clear storage');
        } catch (error) {
            console.log('error=====>', error);
        }
    };


    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <TouchableOpacity
                        onPress={() => Alert.alert("Are You Sure ?", "You want to go back ?", [
                            {
                                text: "Yes",
                                onPress: () => {
                                    props.navigation.navigate("ImageChooser")
                                },
                            },
                            { text: "No", onPress: () => console.log("Okay"), style: "cancel" },
                        ])}
                    >
                        <IconTwo style={{ paddingLeft: 10 }} name="arrowleft" size={25} color="black" />
                    </TouchableOpacity>
                </View>

                <Text style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: 20 }}>ImagePicker</Text>
                <View></View>
            </View>

            <FlatList
                data={images}
                renderItem={renderBox}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                style={{ marginVertical: 20, flex: 1 }}
            />

            <Modal
                animationType={'slide'}
                transparent={true}
                visible={isModalVisible}
            >

                <View style={{ backgroundColor: 'grey', height: '100%' }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <IconThree style={{ padding: 40 }} name="download" size={30} color="white" onPress={() => { downloadImage() }} />
                        <IconFour style={{ padding: 40 }} name="cancel" size={30} color="white" onPress={() => { setModalVisible(false) }} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
                        {selectedImage && (<Image
                            width={300}
                            height={300}
                            source={{ uri: selectedImage.path }}
                        />)}

                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginVertical: 10
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    image: {
        width: 100,
        height: 100,
        margin: 5,
    },
});

export default ImageSelection;
