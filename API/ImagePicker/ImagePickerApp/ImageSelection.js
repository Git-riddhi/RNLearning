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
    const [images, setImages] = useState([]);
    // const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [draftImage, setDraftImage] = useState(null);
    const [backmodalVisible, setBackModalVisible] = useState(false)

    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    //         if (backmodalVisible) {
    //             setBackModalVisible(false);
    //             return true;
    //         }
    //         return false;
    //     });

    //     return () => backHandler.remove();
    // }, [backmodalVisible]);


    const handleBackButtonClick = () => {

        Alert.alert("Are You Sure ?", "You want to GoBack ?", [
            {
                text: "Save As Draft",
                onPress: () => {
                   if( saveImageAsDraft()){
                    props.navigation.navigate("ImageChooser")
                   }
                    // after save navigate in previous screen
                    
                },
            },
            {
                text: "GoBack", onPress: () =>{
                    if(clearDraft()){
                        props.navigation.navigate("ImageChooser")
                    }
                    // Data should be delete when click on go back.
                  
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


    const handleImagePicker = async () => {
        try {
            const image = await ImagePicker.openPicker({
                mediaType: 'photo',
                cropping: true,
            });

            setImages([...images, image]);
            console.log('images ====>', images);
            console.log('selected image ====>', image);
        } catch (error) {
            console.log(error);
        }
    };

    const renderBox = ({ index, item }) => {
        if (item.uri) {
            return (
                <TouchableOpacity onPress={() => { openImageModal(item) }} >
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
    // const downloadImage = async ({ item }) => {
    //     const url = images[index];
    //     const imagePath = `${RNFetchBlob.fs.dirs.DownloadDir}/image.jpg`;

    //     try {
    //         // await createNotificationChannel();
    //         const response = await RNFetchBlob.config({
    //             fileCache: true,
    //             path: imagePath,
    //             addAndroidDownloads: {
    //                 useDownloadManager: true,
    //                 notification: true,
    //                 mediaScannable: true,
    //                 title: 'Image Download',
    //                 description: 'Downloading image...',
    //                 mime: 'image/jpeg',
    //                 path: imagePath,
    //             },
    //             indicator: true,

    //         }).fetch('GET', url);


    //     } catch (error) {
    //         console.error('Image download error:', error);
    //     }
    // };

    const downloadImage = async () => {
        try {
            const response = await RNFetchBlob.config({
                fileCache: true,
                appendExt: 'png',
            }).fetch('GET', selectedImage.path);

            const downloadDir = response.path();
            console.log('Image downloaded to:', downloadDir);
        } catch (error) {
            console.log('Error downloading image:', error);
        }
    };


    const openImageModal = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

    // const saveDraft = () => {
    //     if (selectedImage) {
    //         setDraftImage(selectedImage);
    //         setModalVisible(false);
          
    //     }
       
    // };

    // const goBack = () => {
    //     setDraftImage(null);
    //     setModalVisible(false);
    // };


    
  const saveImageAsDraft = async () => {
    try {
     const setitem= await AsyncStorage.setItem('draftImage', images[selectedImage]);
     console.log('setitem ===>', setitem);
    } catch (error) {
      console.log(error);
    }
  };

  const clearDraft = async () => {
    try {
      await AsyncStorage.removeItem('draftImage');
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
                data={Array.from({ length: 6 }, (_, index) => ({ key: index.toString(), uri: images[index]?.path }))}
                renderItem={renderBox}
                keyExtractor={item => item.key}
                numColumns={3}
                style={{ marginVertical: 20 }}
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
                            source={{ uri: selectedImage.uri }}
                        />)}

                    </View>
                </View>
            </Modal>

            {/* <Modal visible={backmodalVisible} animationType="slide">
                <View>
                    {selectedImage && <Image source={{ uri: selectedImage.path }} style={{ width: 200, height: 200 }} />}
                    <Button title="save As Draft" onPress={saveDraft} />
                    <Button title="Goback" onPress={() => goBack()} />
                </View>
            </Modal> */}
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
