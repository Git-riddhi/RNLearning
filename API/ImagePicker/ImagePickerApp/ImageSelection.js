import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image, StyleSheet, Text, Alert, Modal, BackHandler } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconTwo from "react-native-vector-icons/AntDesign";
import IconThree from "react-native-vector-icons/AntDesign";
import IconFour from "react-native-vector-icons/MaterialIcons";
import RNFetchBlob from 'rn-fetch-blob';
import { Button, Dialog } from 'react-native-paper';

const ImageSelection = (props) => {
    const [images, setImages] = useState([]);
    const [showModal, setShowModal] = useState(false);


    const handleBackButtonClick = () => {

        Alert.alert("Are You Sure ?", "You want to GoBack ?", [
            {
                text: "Save As Draft",
                onPress: () => {
                    // after save navigate in previous screen
                    props.navigation.navigate("ImageChooser")
                },
            },
            {
                text: "GoBack", onPress: () =>
                    // Data should be delete when click on go back.
                    props.navigation.navigate("ImageChooser"),
                style: "cancel"
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


    const handleImagePicker = async () => {
        try {
            const selectedImage = await ImagePicker.openPicker({
                mediaType: 'photo',
                cropping: true,
            });

            setImages([...images, selectedImage]);
            console.log('images ====>', images);
            console.log('selected image ====>', selectedImage);
        } catch (error) {
            console.log(error);
        }
    };

    const renderBox = ({ index, item }) => {
        if (item.uri) {
            return (
                <TouchableOpacity onPress={() => { setShowModal(!showModal); }} >
                    <Image source={{ uri: item.uri }} style={styles.image} />
                </TouchableOpacity>)
        } else {
            return (
                <TouchableOpacity style={styles.box} onPress={handleImagePicker}>
                    <Icon name="plus" size={30} color="white" />
                </TouchableOpacity>
            );
        }
    };
    const downloadImage = async ({ item }) => {
        const url = images[index];
        const imagePath = `${RNFetchBlob.fs.dirs.DownloadDir}/image.jpg`;

        try {
            // await createNotificationChannel();
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


        } catch (error) {
            console.error('Image download error:', error);
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
                data={Array.from({ length: 6 }, (_, index) => ({ key: index.toString(), uri: images[index]?.path }))}
                renderItem={renderBox}
                keyExtractor={item => item.key}
                numColumns={3}
                style={{ marginVertical: 20 }}
            />

            <Modal
                animationType={'slide'}
                transparent={true}
                visible={showModal}
            >

                <View style={{ backgroundColor: 'grey', height: '100%' }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <IconThree style={{ padding: 40 }} name="download" size={30} color="white" onPress={() => { downloadImage() }} />
                        <IconFour style={{ padding: 40 }} name="cancel" size={30} color="white" onPress={() => { setShowModal(false) }} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between', marginTop: 30, backgroundColor: 'white' }}>
                        <Image
                            width={300}
                            height={300}
                            source={images}
                        />
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
