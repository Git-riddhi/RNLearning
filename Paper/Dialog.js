import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, Provider, Text, Checkbox } from 'react-native-paper';

const DialogScreen = () => {
    const [visible, setVisible] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);


    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    return (
        <Provider>
            <View>
                <Button onPress={showDialog}>Choose</Button>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>

                        <Dialog.Title>Choose an options</Dialog.Title>

                        <Dialog.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                    setChecked2(false);
                                }} />
                            <Text>Option 1</Text>
                        </Dialog.Content>

                        <Dialog.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Checkbox
                                status={checked2 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked2(!checked2);
                                    setChecked(false);
                                }} />
                            <Text>Option 2</Text>
                        </Dialog.Content>

                        <Dialog.Actions>
                            <Button onPress={hideDialog}>Cancel</Button>
                            <Button onPress={() => console.log('Ok')}>Ok</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </Provider>
    );
};

export default DialogScreen;
