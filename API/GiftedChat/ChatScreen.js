import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Platform, Alert } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'; 
import DocumentPicker from 'react-native-document-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      
      {
        _id: 1,
        text: 'Hello!',
        createdAt: new Date(),
        user: { _id: 2, name: 'React Native' },
      },
    ]);
  }, []);

  const handleSend = newMessages => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  const pickImage = () => {
    ImageCropPicker.openPicker({
      cropping: true, // Set to true if you want to enable image cropping
      width: 300,     // Width of the cropped image
      height: 400,    // Height of the cropped image
      includeBase64: true, // Include base64 encoded image data (optional)
    }).then(response => {
      if (response.didCancel) {
        console.log('Image picker canceled');
      } else if (response.error) {
        console.error('Image picker error:', response.error);
      } else {
        const imageMessage = [
          {
            _id: Math.random().toString(),
            image: `data:${response.mime};base64,${response.data}`, // Include base64 image data
            createdAt: new Date(),
            user: { _id: 1 },
          },
        ];

        handleSend(imageMessage);
      }
    }).catch(err => {
      console.error('Image picker error:', err);
    });
  };

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      const fileMessage = [
        {
          _id: Math.random().toString(),
          file: {
            uri: result.uri,
            name: result.name,
            type: result.type,
          },
          createdAt: new Date(),
          user: { _id: 1 },
        },
      ];

      handleSend(fileMessage);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Document picker canceled');
      } else {
        console.error('Document picker error:', err);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={newMessages => handleSend(newMessages)}
        user={{ _id: 1 }}
        renderActions={() => (
          <TouchableOpacity onPress={pickImage}>
            <Text>Send Image</Text>
          </TouchableOpacity>
        )}
     
      />
    </View>
  );
};

export default ChatScreen;
