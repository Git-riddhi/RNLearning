import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import IconTwo from "react-native-vector-icons/Octicons";

function ImagePickerComponent() {
  const [images, setImages] = useState([]);

  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    }).then(selectedImages => {
      setImages([...images, ...selectedImages]);
    });
  };

  const renderImageItem = ({ item }) => {
    return (

      // <View style={{ height: 100, width: 100, backgroundColor: 'lightgrey', marginVertical: 30 }}>
      //   {images == null ?
      //     <IconTwo style={{ padding: 40 }} name="plus" size={25} color="black" onPress={() => { openImagePicker() }} />
      //     :
      //     <Image
      //       source={{ uri: item.path }}
      //       style={{ width: 100, height: 100, margin: 5 }}
      //     />
      //   }
      // </View>

      <Image
        source={{ uri: item.path }}
        style={{ width: 100, height: 100, margin: 5 }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <TouchableOpacity onPress={openImagePicker}>
        <Text>Select Images</Text>
      </TouchableOpacity> */}

        <View style={{ height: 100, width: 100, backgroundColor: 'lightgrey', marginVertical: 30 }}>
                <IconTwo style={{ padding: 40 }} name="plus" size={25} color="black" onPress={() => { openImagePicker() }} />
            </View> 

      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderImageItem}
        numColumns={3}
      />
    </View>
  );
}

export default ImagePickerComponent;
