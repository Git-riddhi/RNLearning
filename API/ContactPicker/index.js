import React, { useState, useEffect } from 'react';
import { View, Button, Alert, PermissionsAndroid, Text, ScrollView, FlatList, TouchableOpacity, StatusBar, TextInput, Image, StyleSheet } from 'react-native';
import Contacts from 'react-native-contacts';
import Icon from 'react-native-vector-icons/AntDesign'
import IconTwo from 'react-native-vector-icons/Fontisto'

const ContactPicker = (props) => {
    const [contacts, setContacts] = useState([]);
    const [showTextInput, setShowTextInput] = useState(false)

    const [search, setSearch] = useState('')

    const [contactList, setContactList] = useState(contacts)

    const searchFun = (input) => {

        setSearch(input)
        var a = contacts.filter(word => word.displayName.match(input))

        // console.log("Searching Data :", a)
        setContactList(a)

    }

    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        try {
            const result = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS);

            if (result === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
                loadContacts();
            } else {
                Alert.alert('Permission denied', 'Please grant contacts permission to use this feature.');
            }
        } catch (error) {
            console.error('Error requesting permission: ', error);
        }
    };

    const loadContacts = () => {
        Contacts.getAll()
            .then(contactList => {
                setContacts(contactList);
                // console.log('contactList ====>', contactList);
            })
            .catch(error => {
                console.log('Error loading contacts ===>', error);
            });
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.itemMainView}>
            <View style={styles.imageView}>
                <Image resizeMode='cover' source={require('../../../../../assets/personIcon.png')} style={{ height: 35, width: 35, }} />
            </View>
            <View>
                <Text style={styles.displayNameStyle}>{item.displayName}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.containerStyle}>
            <StatusBar barStyle={'light-content'} backgroundColor={'rgb(11,129,105)'} />
            {!showTextInput ?
                <View style={styles.appBarStyle}>
                    <TouchableOpacity style={styles.backIconStyle} onPress={() => props.navigation.goBack()}>
                        <Icon name='arrowleft' size={25} color='white' />
                    </TouchableOpacity>

                    <Text style={styles.headingStyle}>Contacts to send</Text>
                    <TouchableOpacity style={styles.backIconStyle} onPress={() => { setShowTextInput(true), setSearch(false) }}>
                        <IconTwo name='search' size={20} color='white' />
                    </TouchableOpacity>

                </View>

                :
                <View style={styles.searchBarView}>
                    <TouchableOpacity style={styles.backIconStyle} onPress={() => setShowTextInput(false)}>
                        <Icon name='arrowleft' size={25} color='white' />
                    </TouchableOpacity>

                    <TextInput
                        autoFocus={true}
                        style={styles.textInputstyle}
                        placeholder='Search'
                        placeholderTextColor={'white'}
                        onChangeText={(search) => searchFun(search)}
                        value={search}
                    />

                </View>

            }

            {/* <Button title="Pick a Contact" onPress={requestPermission} /> */}

            <FlatList
                data={contacts}
                renderItem={renderItem}
                ItemSeparatorComponent={
                    <View
                        style={{ height: 10, width: '100%', alignSelf: 'center' }}
                    />
                }
                keyExtractor={(item, index) => item + index}
            />


        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
    },

    appBarStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(11,129,105)',
        padding: 10,
        marginBottom: 5,
    },
    headingStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    searchBarView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(11,129,105)',
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    textInputstyle: {
        marginHorizontal: 10,
        width: '80%',
        color: 'white',
    },
    itemMainView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    imageView: {
        backgroundColor: 'lightgrey',
        borderRadius: 60,
        padding: 5
    },
    displayNameStyle:{
         fontSize: 15, 
         color: 'black',
          marginLeft:10 },
});


export default ContactPicker;
