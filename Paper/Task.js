import React, { useState, useRef, useCallback } from 'react';

import { Chip, Provider, Portal, Appbar, Divider, List, IconButton, RadioButton } from 'react-native-paper';
// import RangeSlider from 'rn-range-slider';
import Slider from 'rn-range-slider';

import Thumb from '../Slider/Thumb';
import Rail from '../Slider/Rail';
import RailSelected from '../Slider/RailSelected';
import Notch from '../Slider/Notch';
import Label from '../Slider/Label';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet, SafeAreaView, Image, View, Text, FlatList, ScrollView } from 'react-native';

const data = [
    {
        "id": 1,
        "title": "Gray",
        "image": require('../assets/gray.jpg'),
        "icon": 'check',


    },
    {
        "id": 2,
        "title": "Black",
        "image": require('../assets/black.jpg'),
        "icon": 'check',


    },
    {
        "id": 1,
        "title": "White",
        "image": require('../assets/white3.png'),
        "icon": 'check',

    },
    {
        "id": 1,
        "title": "Skyblue",
        "image": require('../assets/skyblue.png'),
        "icon": 'check',


    }
]

const Item = ({ item }) => {
    const [select, setSelect] = useState(false);
    return (

        <View style={{ flexDirection: 'row' }}>

            <Chip
                avatar={<Image source={item.image}
                    style={{ width: 25, height: 25, resizeMode: 'contain' }} />}
                // icon={select ? "check-bold" : "information"}
                textStyle={{ color: select ? "white" : "black" }}

                style={[styles.colorChip2, { backgroundColor: select ? "black" : "white" }]}
                // selected={select}
                // onClose={() => console.log('Close Chip')}
                onPress={() => setSelect(!select)}
            >
                {item.title}
            </Chip>
        </View>
    )
}

const TaskScreen = () => {

    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback(value => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);
    const handleValueChange = useCallback((low, high) => {
        // setLow(low);
        // setHigh(high);
    }, []);

    const [selected, setSelected] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);

    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(false);
    const [select3, setSelect3] = useState(false);



    return (

        <Provider>
            <Portal>
                <Appbar.Header>
                    <IconButton
                        icon="chevron-left"
                        iconColor={'black'}
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />
                    <Appbar.Content title="Filter" style={{ alignItems: 'flex-end', justifyContent: 'center' }} />
                    <Appbar.Content title="Reset" style={{ alignItems: 'flex-end', justifyContent: 'center', marginHorizontal: 20 }} />

                </Appbar.Header>

                <ScrollView>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Category</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.text2}>View all</Text>
                            <IconButton
                                icon="greater-than"
                                iconColor={'black'}
                                size={15}
                                onPress={() => console.log('Pressed')}
                            />
                        </View>
                    </View>
                    <Divider />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Brand</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.text2}>View all</Text>
                            <IconButton
                                style={{ alignItems: 'center', justifyContent: "center" }}
                                icon="greater-than"
                                iconColor={'black'}
                                size={15}
                                onPress={() => console.log('Pressed')}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Chip
                            textStyle={{ color: select1 ? "white" : "black", marginLeft: 20 }}
                            style={[styles.colorChip, { backgroundColor: select1 ? "black" : "white" }]}
                            icon={() => (
                                <Icon name="check" size={20} color={select1 ? "white" : "black"} />
                            )}
                            // selected={true}
                            // selectedColor={'white'}
                            onPress={() => setSelect1(!select1)}
                            selectedColor={'white'}
                        >
                            Ardell
                        </Chip>
                        <Chip
                            textStyle={{ color: select2 ? "white" : "black" }}
                            style={[styles.colorChip, { backgroundColor: select2 ? "black" : "white" }]}
                            icon={() => (
                                <Icon name="check" size={20} color={select2 ? "white" : "black"} />
                            )}
                            onPress={() => setSelect2(!select2)}
                        >
                            bareMinerals
                        </Chip>
                        <Chip
                            textStyle={{ color: select3 ? "white" : "black", marginLeft: 20 }}
                            style={[styles.colorChip, { backgroundColor: select3 ? "black" : "white" }]}
                            icon={() => (
                                <Icon name="check" size={20} color={select3 ? "white" : "black"} />
                            )}
                            onPress={() => setSelect3(!select3)}
                        >
                            Ciate
                        </Chip>
                    </View>


                    <List.Accordion title="Color" >

                        <FlatList
                            horizontal={true}
                            data={data}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <Item item={item} />}
                        />

                    </List.Accordion>

                    {/* <List.Accordion title="PriceRange" > */}

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Price Range</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.text2}>0-234€</Text>
                            <IconButton
                                icon="chevron-up"
                                iconColor={'black'}
                                size={25}
                                onPress={() => console.log('Pressed')}
                            />
                        </View>
                    </View>
                    <Slider
                        style={styles.slider}
                        min={0}
                        max={100}
                        step={1}
                        floatingLabel
                        renderThumb={renderThumb}
                        renderRail={renderRail}
                        renderRailSelected={renderRailSelected}
                        renderLabel={renderLabel}
                        renderNotch={renderNotch}
                        onValueChanged={handleValueChange}
                    />
                    {/* </List.Accordion> */}

                    <Divider style={{ marginTop: 15 }} />

                    <List.Accordion title="Customer Review"  >

                        <View style={{ flexDirection: 'row', }}>


                            <IconButton
                                icon="star"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />
                            <IconButton style={{ marginLeft: -20 }}
                                icon="star"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />
                            <IconButton style={{ marginLeft: -20 }}
                                icon="star"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />
                            <IconButton style={{ marginLeft: -20 }}
                                icon="star"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />
                            <IconButton style={{ marginLeft: -20 }}
                                icon="star-outline"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black" }}>& up</Text>

                                <View style={{ marginStart: 90 }}>
                                    <RadioButton
                                        status={checked1 ? 'checked' : 'unchecked'}
                                        onPress={() => { setChecked2(false); setChecked3(false); setChecked1(!checked1) }}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', }}>


                            <IconButton
                                icon="star"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />
                            <IconButton style={{ marginLeft: -20 }}
                                icon="star"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />
                            <IconButton style={{ marginLeft: -20 }}
                                icon="star"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />
                            <IconButton style={{ marginLeft: -20 }}
                                icon="star-outline"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />
                            <IconButton style={{ marginLeft: -20 }}
                                icon="star-outline"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black" }}>& up</Text>

                                <View style={{ marginStart: 90 }}></View>
                                <RadioButton
                                    status={checked2 ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked3(false); setChecked1(false); setChecked2(!checked2) }}
                                />

                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', }}>

                            <IconButton
                                icon="star"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />
                            <IconButton style={{ marginLeft: -20 }}
                                icon="star"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />
                            <IconButton style={{ marginLeft: -20 }}
                                icon="star-outline"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />
                            <IconButton style={{ marginLeft: -20 }}
                                icon="star-outline"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />
                            <IconButton style={{ marginLeft: -20 }}
                                icon="star-outline"
                                selected={selected}
                                // icon={selected ? 'star' : 'star-outline'}
                                iconColor={'black'}
                                size={30}
                            // onPress={() => { setSelected(false); setSelected(!selected) }}
                            />

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black" }}>& up</Text>

                                <View style={{ marginStart: 90 }}>
                                    <RadioButton
                                        status={checked3 ? 'checked' : 'unchecked'}
                                        onPress={() => { setChecked1(false); setChecked2(false); setChecked3(!checked3) }}
                                    />
                                </View>
                            </View>

                        </View>

                    </List.Accordion>

                    <Divider />
                    <View style={{ backgroundColor: 'black', marginHorizontal: 30, borderRadius: 10, padding: 10, marginVertical: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Show 345 Results</Text>
                    </View>
                </ScrollView>

            </Portal>
        </Provider>

    );
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    colorChip: {
        width: 120,
        borderRadius: 30,
        marginHorizontal: 10,
        backgroundColor: 'black',
        marginBottom: 20,
    },
    colorChip2: {
        width: 100,
        height: 35,
        borderRadius: 30,
        borderWidth: 1,
        marginHorizontal: 10,
        backgroundColor: 'white',
        color: 'white',
        marginBottom: 20,

    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        padding: 17,


    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        padding: 20,
        marginRight: -20,

    },

});

export default TaskScreen;