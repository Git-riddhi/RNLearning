import React, { useState } from 'react';

import { Chip, ToggleButton, Provider, Portal, SegmentedButtons } from 'react-native-paper';

import { StyleSheet, SafeAreaView, Image } from 'react-native';

const ChipScreen = () => {

    const [select, setSelect] = useState(false);
    const [value, setValue] = React.useState('left');


    return (
        <SafeAreaView style={styles.MainContainer}>
            <Provider>
                <Portal>

                    <SegmentedButtons style={{ alignItems: 'center', justifyContent: 'center' }}
                        value={value}
                        onValueChange={setValue}
                        buttons={[
                            {
                                value: 'walk',
                                label: 'Walking',
                            },
                            {
                                value: 'train',
                                label: 'Transit',
                            },
                            { value: 'drive', label: 'Driving' },
                        ]}
                    />



                    <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>

                        <ToggleButton icon="format-align-left" value="left" />
                        <ToggleButton icon="format-align-right" value="right" />
                    </ToggleButton.Row>

                    <Chip avatar={<Image source={{ uri: 'https://secure.gravatar.com/avatar/dbbab0050db2dbd84d4e2c844196ee0c?s=60&d=mm&r=g' }}
                        style={{ width: 25, height: 25, resizeMode: 'contain' }} />}
                        style={styles.chip}
                        onPress={() => console.log('camera')}>
                        Avatar Chip
                    </Chip>

                    <Chip
                        icon={select ? "check-bold" : "information"}
                        style={styles.closeChip}
                        selected={select}
                        selectedColor={select ? 'red' : 'black'}
                        onClose={() => console.log('Close Chip')}
                        onPress={() => setSelect(!select)}>
                        Select Chip
                    </Chip>

                    <Chip
                        icon="apple"
                        textStyle={{ color: 'white' }}
                        style={styles.colorChip}>
                        Apple Chip
                    </Chip>

                </Portal>
            </Provider>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    chip: {
        width: 135,
        marginBottom: 10
    },

    colorChip: {
        width: 135,
        marginBottom: 10,
        backgroundColor: '#00BFA5'
    },

    closeChip: {
        width: 150,
        marginBottom: 10,
    }
});

export default ChipScreen;