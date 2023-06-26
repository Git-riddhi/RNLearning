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


const SettingScreen = () => {
    const DATA = [
        {
            title: 'Network',
            data: [{
                src: require('../assets/wifi.png'),
                sub_title: 'Connections'
            },
            {
                src: require('../assets/connected.png'),
                sub_title: 'Connected devices'
            }],
        },

        {

            title: 'Sounds and Notifications',
            data: [{
                src: require('../assets/check.png'),
                sub_title: 'Modes and Routines'
            }, {
                src: require('../assets/audio.png'),
                sub_title: 'Sounds and vibration'
            }, {
                src: require('../assets/notification.png'),
                sub_title: 'Notifications'
            }],
        },
        {

            title: 'Display',
            data: [{
                src: require('../assets/display.png'),
                sub_title: 'Display'
            }, {
                src: require('../assets/wallpaper.png'),
                sub_title: 'Wallpaper and style'
            }, {
                src: require('../assets/themes.png'),
                sub_title: 'Themes'
            }, {
                src: require('../assets/home.png'),
                sub_title: 'Home Screen'
            }, {
                src: require('../assets/locked.png'),
                sub_title: 'Lock Screen'
            }],
        },
        {

            title: 'Security',
            data: [{
                src: require('../assets/security.png'),
                sub_title: 'Security and Privacy'
            }, {
                src: require('../assets/location.png'),
                sub_title: 'Location'
            }, {
                src: require('../assets/check.png'),
                sub_title: 'Safety and Emergency'
            }],
        },
        {

            title: 'Accounts',
            data: [{
                src: require('../assets/account.png'),
                sub_title: 'Accounts and Backup'
            }, {
                src: require('../assets/google.png'),
                sub_title: 'Google'
            }],
        },
        {
            title: 'Advanced features',
            data: [{
                src: require('../assets/advanced.png'),
                sub_title: 'Advanced features'
            }],
        },
        {

            title: 'Storage',
            data: [{
                src: require('../assets/account.png'),
                sub_title: 'Battery and Device care'
            }, {
                src: require('../assets/apps.png'),
                sub_title: 'Apps'
            }],
        },
        {

            title: 'Updates',
            data: [{
                src: require('../assets/account.png'),
                sub_title: 'Software Update'
            }, {
                src: require('../assets/tips.png'),
                sub_title: 'Tips and User manual'
            }],
        },
        {
            title: 'About phone',
            data: [{
                src: require('../assets/aboutphone.png'),
                sub_title: 'About phone'
            }],
        },
    ];
    const [search, setSearch] = useState('')
    const [settingList, setSettingList] = useState(DATA)

    const searchFunction = (input) => {

        setSearch(input)

        var DataArray = [...DATA]
        console.log('DataArray : ', DataArray)
        console.log('Input :', input)

        let selectedArray = []
        for (var elem of DataArray) {
            // console.log('length of elem :', elem.data.length)
            if (elem.data.length > 0) {
                selectedArray = elem.data.filter((innerelem) => {
                    // console.log('innerelem---',innerelem.sub_title)
                    return innerelem.sub_title.match(input)
                })
                elem.data = selectedArray;
                // console.log('selected array is ', selectedArray)
            }
            setSettingList(DataArray)

        }

        // var a = DATA.filter(word => word.title.match(input))
        // console.log("Searching Data :", a)
        // setSettingList(a)
    }

    return (
        <SafeAreaView style={styles.container}>

            {/* <View style={styles.headerView}>
                <Text style={styles.headerText}>Settings</Text>
            </View> */}
            <View style={styles.search_View}>
                <View style={styles.searchView}>
                    <Image
                        source={require('../assets/download(1).png')}
                        style={styles.Image1Style}
                    />

                    <TextInput
                        placeholder='Search'
                        onChangeText={(search) => searchFunction(search)}
                        value={search}
                    />
                </View>

            </View>

            <SectionList
                sections={settingList}
                // scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item + index}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'grey', marginVertical: 5 }}>
                        </View>
                    )
                }}
                renderItem={({ item }) => (
                    <>
                        <View style={styles.item}>
                            <View style={styles.image}>
                                <Image style={styles.image} source={item.src} />
                                <Text style={styles.sub_title}>{item.sub_title}</Text>
                            </View>
                        </View>
                    </>

                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 15,

    },
    searchView: {
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: 'grey',
        width: "100%",
        height: 40
    },
    search_View: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    Image1Style: {
        padding: 10,
        margin: 7,
        height: 25,
        width: 25,
        alignItems: 'center',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    header: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        color: 'black',
    },
    image: {
        width: 40,
        height: 40,
        flexDirection: 'row',
    },
    Image1Style: {
        padding: 10,
        margin: 7,
        height: 25,
        width: 25,
        alignItems: 'center',
    },

    // headerText: {
    //     fontSize: 27,
    //     color: 'black',
    //     fontWeight: 'bold',
    //     width: '100%',
    // },
    // headerView: {
    //     marginBottom: 10,
    // },

    sub_title: {
        fontSize: 15,
        color: "black",
        alignSelf: 'center',
        width: 150,
        marginLeft: 10,
    }
});

export default SettingScreen;
