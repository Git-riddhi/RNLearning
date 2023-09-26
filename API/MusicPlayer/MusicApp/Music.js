import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Button,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import TrackPlayer, {
    State,
    usePlaybackState,
    useProgress,
} from 'react-native-track-player';
import { setupPlayer, addTracks, playbackService } from './trackPlayerServices';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayerSlider from './Slider';
import { songs } from './MusicData';
import Slider from '@react-native-community/slider';

const { height, width } = Dimensions.get('window');

const Music = () => {
    const route = useRoute();

    const ref = useRef();

    const progress = useProgress();

    const { position, duration } = useProgress();

    // const playbackState = usePlaybackState();

    const [isPlay, setIsPlay] = useState(false);
    const [currentSong, setCurrentSong] = useState(route.params.index);

    console.log('route.params.index ---', route.params.index);

    // useEffect(() => {
    //     setTimeout(() => {
    //         ref.current.scrollToIndex({
    //             animated: true,
    //             index: currentSong,
    //         });
    //     }, 100);
    // }, []);

    const [isPlayerReady, setIsPlayerReady] = useState(false);

    useEffect(() => {
        async function setup() {
            let isSetup = await setupPlayer();

            const queue = await TrackPlayer.getQueue();
            if (isSetup && queue.length <= 0) {
                await addTracks();
            }

            setIsPlayerReady(isSetup);
        }

        setup();
    }, []);

    const formatTime = t => {
        const digit = n => (n < 10 ? `0${n}` : `${n}`);
        const sec = digit(Math.floor(t % 60));
        const min = digit(Math.floor((t / 60) % 60));
        const hr = digit(Math.floor((t / 3600) % 60));
        return hr + ':' + min + ':' + sec;
    };

    if (!isPlayerReady) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large" color="#bbb" />
            </SafeAreaView>
        );
    }

    // const togglePlayBack = async playbackState => {

    //     console.log('playbackState', playbackState);
    //     if (playbackState == State.Paused ||
    // playbackState == State.Ready
    // || playbackState == State.Buffering
    // || playbackState === State.Connecting
    // || playbackState === State.Playing
    // )
    // {
    //         await TrackPlayer.play();
    //     }
    //     else {
    //         await TrackPlayer.pause()
    //     }
    // }

    // const start = async () => {
    //     // console.log('ok');
    //     await TrackPlayer.setupPlayer({});
    //     await TrackPlayer.add({
    //         // ../MusicPlayer/songs/songs_2.mp3
    //        // Load media from the network
    //         // title: 'Songs',
    //         // artist: 'Demo',

    //     });
    //     await TrackPlayer.play();
    //     console.log(' item.song ==>', item.song);
    // };

    // useEffect(() => {
    //    start()
    // }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                horizontal
                ref={ref}
                showsHorizontalScrollIndicator={false}
                // scrollEnabled
                getItemLayout={(data, index) => ({
                    length: height / 1.8,
                    offset: (height / 1.8) * index,
                    index,
                })}
                // onScroll={async e => {
                //   const x = e.nativeEvent.contentOffset.x / width;
                //   setCurrentSong(parseInt[x.toFixed(0)]);
                //   await TrackPlayer.skip(parseInt[x.toFixed(0)]);
                // }}
                pagingEnabled
                data={songs}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.bannerView}>
                            <Image source={item.image} style={styles.banner} />
                            <Text style={styles.songName}>{item.name}</Text>
                        </View>
                    );
                }}
            />

            <View>
                <View style={styles.sliderView}>

                    <Slider />
                    {/* <Slider

                        value={progress.position}
                        maximumValue={progress.duration}
                        minimumValue={0}
                        thumbStyle={{ width: 20, height: 20 }}
                        thumbTintColor='black'
                        onValueChange={async value => {
                            await TrackPlayer.seekTo(value);
                         }}

                    /> */}

                    {/* <TrackPlayerSlider
                        minimumValue={0}
                        maximumValue={duration}
                        value={position}
                        // onValueChange={async value => {
                        //     await TrackPlayer.seekTo(value);
                        // }}
                        onValueChange={value => console.log('value====', value)}
                    //  onSlidingComplete={onSlidingComplete}
                    /> */}
                </View>
                <View style={styles.trackProgress}>
                    <Text style={styles.timeTextStyle}>{formatTime(position)}</Text>
                    <Text style={styles.timeTextStyle}>{formatTime(duration)}</Text>
                </View>

                <View style={styles.iconView}>
                    <Icon
                        name="play-skip-back-sharp"
                        size={30}
                        color={'black'}
                        onPress={async () => {
                            if (currentSong > 0) {
                                setCurrentSong(currentSong - 1);
                                ref.current.scrollToIndex({
                                    animated: true,
                                    index: parseInt(currentSong) - 1,
                                });
                                await TrackPlayer.skipToPrevious();
                                // togglePlayBack(playbackState)
                            }
                        }}
                    // onPress={() => TrackPlayer.SkipToPrevious()}
                    />
                    {/*                    
                        <Icon
                            name= {playbackState == State.Paused || playbackState == State.Ready ? "play" :'pause'}
                            size={30}
                            color={'black'}
                            onPress={async () => {
                                togglePlayBack(playbackState)
                                // await TrackPlayer.pause();
                            }}
                       
                        /> */}
                    {/* :
                        <Icon
                            name="pause"
                            size={30}
                            color={'black'}
                            onPress={async () => {
                                togglePlayBack(playbackState)
                                
                            }}
                        /> */}

                    {isPlay ? (
                        <Icon
                            name="play"
                            size={30}
                            color={'black'}
                            onPress={() => {
                                TrackPlayer.play(), setIsPlay(false);
                            }}
                        />
                    ) : (
                        <Icon
                            name="pause"
                            size={30}
                            color={'black'}
                            onPress={() => {
                                TrackPlayer.pause(), setIsPlay(true);
                            }}
                        />
                    )}

                    <Icon
                        name="play-skip-forward-sharp"
                        size={30}
                        color={'black'}
                        onPress={async () => {
                            if (songs.length - 1 > currentSong) {
                                setCurrentSong(currentSong + 1);
                                ref.current.scrollToIndex({
                                    animated: true,
                                    index: parseInt(currentSong) + 1,
                                });
                                await TrackPlayer.skipToNext();
                                // togglePlayBack(playbackState);
                            }
                        }}
                    // onPress={() => TrackPlayer.skipToNext()}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
    },
    bannerView: {
        // backgroundColor: 'red',
        width: width,
        height: height / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },

    banner: {
        width: '90%',
        height: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    songName: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    iconView: {
        marginTop: 30,
        // top: -50,
        bottom: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    sliderView: {
        // flex:1,
        bottom: 60,
        alignSelf: 'center',
        width: '90%',
    },
    trackProgress: {
        flexDirection: 'row',
        bottom: 50,
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    timeTextStyle: {
        fontSize: 12,
        color: 'black',
    },
});

export default Music;
