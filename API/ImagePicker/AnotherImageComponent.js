import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import IconTwo from "react-native-vector-icons/Octicons";
import Icon from 'react-native-vector-icons/FontAwesome';


function AnotherImagePickerComponent() {
  const [images, setImages] = useState([]);

  const handleImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        cropping: true,
      });

      setImages([...images, image]);
    } catch (error) {
      console.log(error);
    }
  }

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.path }} style={{height:100, width:100}} />
  );
  return (
    <View style={{flex:1}}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
      <TouchableOpacity style={{backgroundColor:'red'}} onPress={handleImagePicker}>
        <Icon name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default AnotherImagePickerComponent;
