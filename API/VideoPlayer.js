import Video from 'react-native-video';
// import video from '../test-video.mp4';
import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native'
// import * as ScreenOrientation from 'expo-screen-orientation';
// import Orientation from 'react-native-orientation';
// import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

const VideoPlayer = () => {

    // const video = React.useRef(null)

    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isMuted, setIsMuted] = React.useState(false);

    // const [status, setStatus] = React.useState({})
    // const [orientationIsLandscape, setOrientation] = useState(true)

    // const changeScreenOrientation = () => {
    //     if (orientationLandscape == true) { ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE) }
    //     else if (orientationLandscape == false) {
    //         ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.POTRAIT)
    //     }
    // };

    // const toggleOrientation = ()=>{
    //     setOrientation(!orientationIsLandscape)
    //     changeScreenOrientation()
    // }

    // const [currentTime, setCurrentTime] = useState(0);
    // const [duration, setDuration] = useState(0);
    // const [isFullScreen, setIsFullScreen] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    // const [paused, setPaused] = useState(false);
    // const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);

    return (
        <View style={styles.container}>
            <Video
                source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
                paused={!isPlaying}
                // paused
                // muted
                controls={true}
                style={styles.backgroundVideo}
                muted={isMuted}
                resizeMode='contain'
            // islooping
            // onPlaybackStatusUpdate={status => setStatus(() => status)}
            />

            {/* <MediaControls
                isFullScreen={isFullScreen}
                duration={duration}
                isLoading={isLoading}
                mainColor="orange"
                // onFullScreen={noop}
                onPaused={onPaused}
                onReplay={onReplay}
                onSeek={onSeek}
                onSeeking={onSeeking}
                playerState={playerState}
                progress={currentTime}
            >
                <MediaControls.Toolbar>
                    <View style={styles.toolbar}>
                        <Text>I'm a custom toolbar </Text>
                    </View>
                </MediaControls.Toolbar>
            </MediaControls>
             */}

            <Button
                onPress={() => setIsPlaying(p => !p)}
                title={isPlaying ? 'Pause' : 'Play'}
            // title={status.isPlaying ? 'Pause' : 'Play'}

            // onPress={()=>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}
            />
            <Button
                onPress={() => setIsMuted(m => !m)}
                title={isMuted ? 'Unmute' : 'Mute'}
            // title={status.isMuted ? 'Unmute' : 'Mute'}

            />
            {/* <Button
                onPress={toggleOrientation}
                title='Change Orientation'
            /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    backgroundVideo: {
        height: 400,
        width: "100%"
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default VideoPlayer;