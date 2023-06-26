import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking,
    SafeAreaView,
    FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
// import { I18n } from 'react-i18next';


const translations = {
    en: { welcome: 'Hello, welcome to my app!' },
    fr: { welcome: 'Bojour, bievenue dans mon application!' },
    ur: { welcome: 'ہیلو میری درخواست!' },
    hn: { welcome: 'नमस्ते मेरे आवेदन में आपका स्वागत है।!' },
}


// const i18n = new I18n(translations);

i18n.locale = Loc
const MultipleLanguage = () => {

    // useEffect(()=>{

    // },[])
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text>Add Multiple Language</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 30,
    },

});

export default MultipleLanguage;
