import React, { useEffect, useState, useRef } from 'react';
import { View, Dimensions, StyleSheet, Platform, Text, TouchableOpacity } from 'react-native';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const data = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
];

const sliderWidth = Dimensions.get('screen').width;
// const sliderHeight = Dimensions.get('screen').width;

const itemWidth = sliderWidth - 50;
// const itemHeight= sliderHeight



const CarouselInImage = () => {

    const [currentIndex, setCurrentIndex] = useState()
    const { slider1ActiveSlide, setSlider1ActiveSlide } = useState()
    const carouselRef = useRef(null);


    const renderItem = ({ item, index }, parallaxProps) => {

        return (

            <View style={styles.item}>

                <ParallaxImage
                    source={{ uri: item.illustration }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        );
    };
    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    const goBackward = () => {
        carouselRef.current.snapToPrev();
    };


    return (
        <View style={styles.exampleContainer}>
            <Carousel
                data={data}
                ref={carouselRef}
                renderItem={(item, parallaxProps) => renderItem(item, parallaxProps)}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                // itemHeight={itemHeight}
                hasParallaxImages={true}
                onSnapToItem={(index) => setCurrentIndex(index)}
            />

            <View style={styles.pageControlMainView}>
                <Icon
                    name="chevron-left"
                    color={'black'}
                    size={20}
                    onPress={() => {
                        goBackward()
                    }}
                />
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={currentIndex}
                    containerStyle={styles.paginationContainer}
                    dotStyle={styles.paginationDot}
                    inactiveDotStyle={styles.paginationInactiveDot}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
                <Icon
                    name="chevron-right"
                    color={'black'}
                    size={20}
                    onPress={() => { goForward() }}
                />
            </View>

            {/* <TouchableOpacity onPress={goBackward}>
                <Text>go to previous slide</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goForward}>
                <Text>go to next slide</Text>
            </TouchableOpacity> */}

        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },

    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },

    item: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 250,
        margin: 10,
    },

    paginationContainer: {
        paddingTop: 8,
        paddingBottom: 8,
    },

    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
    },

    paginationInactiveDot: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },

    pageControlMainView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});

export default CarouselInImage;