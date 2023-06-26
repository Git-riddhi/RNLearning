import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    SectionList,
    Image,
    TextInput,
} from 'react-native';


const Reels = () => {
    return (

        <View style={styles.postView}>
            <Text>Post</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 15,

    },
});

export default Reels;