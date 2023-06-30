import React, { useState } from 'react';
import { PermissionsAndroid, View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import ImagePicker from 'react-native-image-crop-picker'

const screenWidth = Dimensions.get('screen').width;
// const screenHeight = Dimensions.get('screen').height;

const OpenGallery = () => {

  const [image1, setImage1] = useState()
  const [image2, setImage2] = useState()
  const [image3, setImage3] = useState()
  const [filePath, setFilePath] = useState()


  const requestGalleryPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Photos permission given");
        OpenGallery()
      } else {
        console.log("Photos permission denied");
      }
    } catch (error) {
      console.warn(error)
    }
  }

  const OpenGallery = () => {
    try {
      ImagePicker.openPicker({
        multiple: true
      }).then(images => {
        console.log('image1', images);

        setImage1(images[0].path)
        setImage2(images[1].path)
        setImage3(images[2].path)
      });
    } catch (error) {
      console.log('error--', error)
    }
  }

  const OpenGalleryForSingleImage = () => {
    try {
      launchImageLibrary({

      }, (value) => {
        console.log('photos-value', value)
        setFilePath(value.assets[0].uri)

      })
    } catch (error) {
      console.log('error--', error)
    }

  }

  return (console.log("image1", image1),
    <View>
      <Button
        style={{ width: screenWidth / 2, alignSelf: 'center', margin: 10 }}
        mode='contained'
        onPress={() => { requestGalleryPermission() }}>
        Open Gallery
      </Button>
      <ScrollView>

        {
          image1 ?
            <Image
              style={{ margin: 20 }}
              width={100}
              height={100}
              source={{ uri: image1 }} /> : null
        }
        {
          image2 ?
            <Image
              style={{ margin: 20 }}
              width={100}
              height={100}
              source={{ uri: image2 }} /> : null
        }
        {
          image3 ?
            <Image
              style={{ margin: 20 }}
              width={100}
              height={100}
              source={{ uri: image3 }} /> : null
        }
      </ScrollView>

      <View>
        {
          filePath ?
            <Image
              source={{ uri: filePath }}
              style={styles.imageStyle}
            /> : null
        }

        <Button
          style={{ width: screenWidth / 2, alignSelf: 'center', margin: 10 }}
          mode='contained'
          onPress={() => { OpenGalleryForSingleImage() }}
        >
          Open Gallery Single
        </Button>
      </View>
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
export default OpenGallery;
