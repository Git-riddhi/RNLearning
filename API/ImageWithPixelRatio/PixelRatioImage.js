import React from 'react';
import { View, Image, PixelRatio } from 'react-native';


const ImageArray = [
    {
        name: 'birthday',
        image1: 'https://edeka-be.spreadspace.de/media/responsive/197/1',
        image2: 'https://edeka-be.spreadspace.de/media/responsive/197/2',
        image3: 'https://edeka-be.spreadspace.de/media/responsive/197/3'
    },
    {
        name: 'friends',
        image1: 'https://edeka-be.spreadspace.de/media/responsive/198/1',
        image2: 'https://edeka-be.spreadspace.de/media/responsive/198/2',
        image3: 'https://edeka-be.spreadspace.de/media/responsive/198/3'
    },
    {
        name: 'Wallpaper',
        image1: 'https://edeka-be.spreadspace.de/media/responsive/200/1',
        image2: 'https://edeka-be.spreadspace.de/media/responsive/200/2',
        image3: 'https://edeka-be.spreadspace.de/media/responsive/200/3'
    }
];


const PixelRatioImage = () => {
    const pixelRatio = PixelRatio.get();

    const getImageWithPixelRatio = (imageData, pixelRatio) => {
        if (pixelRatio <= 1) {
            return imageData.image1;
        } else if (pixelRatio <= 2) {
            return imageData.image2;
        } else {
            return imageData.image3;
        }
    };

    
    console.log('function call ===>', getImageWithPixelRatio(ImageArray[0], pixelRatio));
    console.log('pixelRatio ===>', pixelRatio);

    return (
        <View>
            {ImageArray.map((item, index) => (
                <Image
                    key={index}
                    source={{ uri: getImageWithPixelRatio(item, pixelRatio) }}
                    style={{ width: 150, height: 150, alignSelf: 'center', marginVertical: 20 }} 
                />
            ))}
        </View>
    );
};

export default PixelRatioImage;
