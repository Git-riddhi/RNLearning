import React from 'react';
import { View, StyleSheet, } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Slider from '@react-native-community/slider';

const TrackPlayerSlider = ({ minimumValue, maximumValue, value, onValueChange }) => {

    const onSlidingComplete = (value) => {
        TrackPlayer.seekTo(value);
    };

    return (
        <View>
            <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={minimumValue}
                maximumValue={maximumValue}
                value={value}
                onValueChange={onValueChange}
                onSlidingComplete={onSlidingComplete}
                minimumTrackTintColor="black"
                maximumTrackTintColor="grey"
                thumbTintColor="black"
            />
        </View>
    );
};
const styles = StyleSheet.create({

});
export default TrackPlayerSlider;