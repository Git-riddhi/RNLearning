import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import ImagePickerBox from './ImagePickerBox';


const HomeScreen = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (index, image) => {
    const newImages = [...images];
    newImages[index] = image;
    setImages(newImages);
  };

  return (
    <View>
        <Text>picker</Text>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ImagePickerBox image={item} setImage={image => handleImageChange(index, image)} />
        )}
        numColumns={3}
      />
    </View>
  );
};

export default HomeScreen;
