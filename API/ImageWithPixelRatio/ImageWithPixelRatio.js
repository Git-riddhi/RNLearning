import React from 'react';
import { View, Image, Dimensions } from 'react-native';

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


const pixelRatio = Dimensions.get('window').scale;

const ImageWithPixelRatio = () => {

    const getImageUrlForPixelRatio = (imageObject, pixelRatio) => {
        if (pixelRatio = 74) {
            // console.log('imageObject.image1', imageObject.image1);
            return imageObject.image1;
        } else if (pixelRatio = 174) {
            return imageObject.image2;
        } else {
            return imageObject.image3;
        }
    };

    return (
        <View>
            {ImageArray.map((item, index) => (
                <Image
                    key={index}
                    source={{ uri: getImageUrlForPixelRatio(item, pixelRatio) }}
                    style={{ width: 150, height: 150, marginVertical: 20, alignSelf: 'center' }}
                />
            ))}
        </View>
    );
};

export default ImageWithPixelRatio;
