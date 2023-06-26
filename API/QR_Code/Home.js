import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View
            style={styles.container}>
            <Button
                onPress={() => {
                    navigation.navigate('ScannerScreen');
                }}
                title="Scan Qrcode"
            />
            <Button
                onPress={() => {
                    navigation.navigate('GeneratorScreen');
                }}
                title="Genrate Qrcode"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 50,
        justifyContent: 'space-evenly',
    }


})