import TrackPlayer, {
    AppKilledPlaybackBehavior,
    Capability,
    RepeatMode,
    Event
} from 'react-native-track-player';
import { songs } from './MusicData';


export async function setupPlayer() {
    let isSetup = false;
    try {
        await TrackPlayer.getCurrentTrack();
        isSetup = true;
    }
    catch {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
            android: {
                appKilledPlaybackBehavior:
                    AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
            },
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
                Capability.SeekTo,
            ],
            compactCapabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
            ],
            progressUpdateEventInterval: 2,
        });
        isSetup = true;
    }
    finally {
        return isSetup;
    }
}


export async function addTracks() {

    await TrackPlayer.add(songs)

    // console.log(songs, 'songs')

    //     [
    //     {
    //         id: '1',
    //         url: require('../../../assets/Songs/TeraHoneLagaHoon.mp3'),
    //         title: 'Fluidity',
    //         artist: 'tobylane',
    //         duration: 10,
    //     },
    //     {
    //         id: '2',
    //         url: require('../../../assets/Songs/sample-2.mp3'),
    //         title: 'Fluidity',
    //         artist: 'tobylane',
    //         duration: 15,
    //     },
    //     {
    //         id: '3',
    //         url: require('../../../assets/Songs/sample-3.mp3'),
    //         title: 'Fluidity',
    //         artist: 'tobylane',
    //         duration: 20,
    //     },
    //     {
    //         id: '4',
    //         url: require('../../../assets/Songs/sample-4.mp3'),
    //         title: 'Fluidity',
    //         artist: 'tobylane',
    //         duration: 25,
    //     },
    //     // {
    //     //     id: '5',
    //     //     url: require('../../../assets/Songs/songs_1.mp3'),
    //     //     title: 'Fluidity',
    //     //     artist: 'tobylane',
    //     //     duration: 30,
    //     // },
    //     {
    //         id: '6',
    //         url: require('../../../assets/Songs/songs_2.mp3'),
    //         title: 'Fluidity',
    //         artist: 'tobylane',
    //         duration: 35,
    //     },
    //     // {
    //     //     id: '7',
    //     //     url: require('../../../assets/Songs/sample-5.mp3'),
    //     //     title: 'Fluidity',
    //     //     artist: 'tobylane',
    //     //     duration: 40,
    //     // }
    // ]

    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}
export async function playbackService() {
}