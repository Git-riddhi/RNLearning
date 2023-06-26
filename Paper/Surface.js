import React, { useState } from "react";
import { Provider, Surface } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const SurfaceScreen = () => {


    return (
        <Provider>

            <SafeAreaProvider style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Surface style={styles.surface} elevation={0}>
                    <Text>Surface</Text>
                </Surface>
                <Surface style={styles.surface} elevation={1}>
                    <Text>Surface</Text>
                </Surface>
                <Surface style={styles.surface} elevation={2}>
                    <Text>Surface</Text>
                </Surface>
                <Surface style={styles.surface} elevation={3}>
                    <Text>Surface</Text>
                </Surface>

            </SafeAreaProvider>
            <SafeAreaProvider style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Surface style={styles.surface} elevation={0}>
                    <Text>Surface</Text>
                </Surface>
                <Surface style={styles.surface} elevation={1}>
                    <Text>Surface</Text>
                </Surface>
                <Surface style={styles.surface} elevation={2}>
                    <Text>Surface</Text>
                </Surface>
                <Surface style={styles.surface} elevation={3}>
                    <Text>Surface</Text>
                </Surface>

            </SafeAreaProvider>
        </Provider>
    )
}

const styles = StyleSheet.create({
    surface: {
        padding: 8,
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default SurfaceScreen;