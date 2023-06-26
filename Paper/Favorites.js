import * as React from 'react';
import { Appbar, Menu, Button, Divider, Provider, TextInput, RadioButton, Dialog, HelperText, Text, Switch, BottomNavigation, Card } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Favorites = () => {

    const [firstname, setFirstname] = React.useState('')
    const [lastname, setLastname] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [phonenumber, setPhonenumber] = React.useState('')

    const [secure, setSecure] = React.useState(true)

    const [checkedMale, setCheckedMale] = React.useState(false);
    const [checkedFemale, setCheckedFemale] = React.useState(false);


    const [visible, setVisible] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);


    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const hideDialog = () => setVisible2(false);
    const showDialog = () => setVisible2(true);

    const onChangeText = email => setEmail(email);

    const hasErrors = () => {
        // setEmail('')
        return !email.includes('@');
    };

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


    return (
        <Provider>
            <SafeAreaProvider>

                <Appbar.Header>
                   

                    <Appbar.BackAction onPress={() => { }} />
                    <Appbar.Content title="Home" />
                    <Appbar.Action icon="calendar" onPress={() => { }} />
                    <Appbar.Action icon="magnify" onPress={() => { }} />

                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
                        <Menu.Item onPress={() => { }} title="Edit" />
                        <Menu.Item onPress={() => { }} title="Sort" />
                        <Menu.Item onPress={() => { }} title="Select All" />

                        <Divider />
                        <Menu.Item onPress={() => { }} title="Settings" />
                    </Menu>

                </Appbar.Header>

                <TextInput
                    label="First Name"
                    placeholder='Enter email address'
                    placeholderTextColor='grey'
                    onChangeText={() => { setFirstname(firstname) }}
                />

                <TextInput
                    label="Last Name"
                    placeholder='Enter email address'
                    placeholderTextColor='grey'
                    onChangeText={() => { setLastname(lastname) }}
                />

                <TextInput
                    label="Email"
                    placeholder='Enter email address'
                    placeholderTextColor='grey'
                    onChangeText={onChangeText}
                />
                <HelperText type="error" visible={hasErrors()}>
                    Email address is invalid!
                </HelperText>

                <TextInput
                    label="Password"
                    secureTextEntry={secure}
                    right={secure ? <TextInput.Icon icon="eye-off" onPress={() => { setSecure(false) }} /> : <TextInput.Icon icon="eye" onPress={() => { setSecure(true) }} />}
                    onChangeText={() => { setPassword(password) }}
                />

                <TextInput
                    label="Phone Number"
                    placeholder='Enter email address'
                    placeholderTextColor='grey'
                    onChangeText={() => { setPhonenumber(phonenumber) }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Gender :</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <RadioButton
                            status={checkedMale ? 'checked' : 'unchecked'}
                            onPress={() => { setCheckedFemale(false); setCheckedMale(!checkedMale) }}
                        />
                        <Text>Male</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <RadioButton
                            status={checkedFemale ? 'checked' : 'unchecked'}
                            onPress={() => { setCheckedMale(false); setCheckedFemale(!checkedFemale) }}
                        />
                        <Text>Female</Text>
                    </View>

                </View>

                <Button mode="contained" onPress={showDialog}>Sign Up</Button>
                <Dialog visible={visible2} onDismiss={hideDialog}>
                    {/* <Dialog.Icon icon="alert" /> */}
                    <Dialog.Title style={styles.title}>Your Sign Up is successfull.</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">This is simple dialog</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog}>Reset</Button>
                        <Button onPress={() => console.log('Ok')}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>

                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />




            </SafeAreaProvider>
        </Provider>
    )
}

const styles = StyleSheet.create({

})


export default Favorites;