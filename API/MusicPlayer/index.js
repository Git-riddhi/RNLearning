import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { setupPlayer, addTracks } from './trackPlayerServices';

const MusicPlayer=() =>{

  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if(isSetup && queue.length <= 0) {
        await addTracks();
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  if(!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#bbb"/>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Play" color="#777" onPress={() => TrackPlayer.play()}/>
      <Button title="Pause" color="#777" onPress={() => TrackPlayer.pause()}/>
      <Button title="Next" color="#777" onPress={() => TrackPlayer.skipToNext()}/>
      <Button title="Previous" color="#777" onPress={() => TrackPlayer.skipToPrevious()}/>

    </SafeAreaView>
  );
}


// TrackPlayer.remove: Remove music tracks by track indices
// TrackPlayer.skip: Jump to a music track by a given index
// TrackPlayer.next: Go to the next music track
// TrackPlayer.previous: Go to the previous music track
// TrackPlayer.reset: Clear the current playlist and stop playing music


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#112'
  },
});

export default MusicPlayer;
