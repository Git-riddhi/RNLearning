import React, { useState } from 'react';
import { View, Button, Image, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker';


const MultipleImagePicker = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const pickMultipleImages = () => {
    const options = {
      title: 'Select Images',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // Process selected images
        const selectedImagesArray = response.assets.map((image) => ({
          uri: image.uri,
        }));
        setSelectedImages(selectedImagesArray);
      }
    });
  };

  return (
    <View>
      <Button title="Pick Multiple Images" onPress={pickMultipleImages} />

      <ScrollView horizontal>
        {selectedImages.map((image, index) => (
          <Image key={index} source={image} style={{ width: 100, height: 100, margin: 5 }} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MultipleImagePicker;
