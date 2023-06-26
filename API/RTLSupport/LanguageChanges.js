import { View, Text, StyleSheet, Button, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react';
import localization from './localization';

const LanguageChangeScreen = () => {

    const [language, setLanguage] = useState('')

    var EnglishGreeting = localization._props.en
    console.log("EnglishGreeting======", EnglishGreeting);

    var FrenchGreeting = localization._props.fr
    console.log("Frenchgreeting======", FrenchGreeting);

    var ArabicGreeting = localization._props.ar
    console.log("ArabicGreeting======", ArabicGreeting);

    var ChinaGreeting = localization._props.ch
    console.log("ChinaGreeting======", ChinaGreeting);
    console.log("localization", localization);


    const switchLanguage = (languageCode) => {
        setLanguage(languageCode);
        // console.log("languageCode",languageCode);
    };

    return (
        <>

            <TouchableOpacity style={styles.ButtonStyle}
                onPress={() => { switchLanguage() }}>
                <Text style={styles.textStyle}>EnglishGreeting</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}> {EnglishGreeting.greeting === '' ? "" : EnglishGreeting.greeting}</Text>

            <TouchableOpacity style={styles.ButtonStyle}
                onPress={() => { switchLanguage() }}>
                <Text style={styles.textStyle}>FrenchGreeting</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}> {FrenchGreeting.greeting === '' ? "" : FrenchGreeting.greeting}</Text>

            <TouchableOpacity style={styles.ButtonStyle}
                onPress={() => { switchLanguage() }}>
                <Text style={styles.textStyle}> ArabicGreeting</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}> {ArabicGreeting.greeting === '' ? "" : ArabicGreeting.greeting}</Text>

            <TouchableOpacity style={styles.ButtonStyle}
                onPress={() => { switchLanguage() }}>
                <Text style={styles.textStyle}>ChinaGreeting</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>  {ChinaGreeting.greeting === '' ? "" : ChinaGreeting.greeting}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    ButtonStyle: {
        backgroundColor: 'skyblue',
        margin: 20,
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: 'black',
        textAlign:'center'
    },
   
})
export default LanguageChangeScreen