import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ScrollView,
} from "react-native";
import { TrainDetails } from "./DataForBookTicket";
import { TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";



const FindTrain = (props) => {
    const [footerView, setFooterView] = useState(false);
    const [trainClass, setTrainClass] = useState(false);
    const [updatedData, setUpdatedData] = useState([])

    const { fromcity, tocity } = props?.route?.params
    console.log('fromcity ===>', fromcity);
    console.log('tocity ===>', tocity);


    const checkProps = () => {
        const newdata = [...TrainDetails]
        console.log('newdata  ===>', newdata);
        const filteredData = newdata.map((item) => 
            (item.From == fromcity && item.To == tocity )? item: null
            
            )
            console.log('filteredData===>', filteredData);



    }

    useEffect(() => {
        checkProps()
    }, [])

    const Item = ({ item }) => (
        <View style={styles.mainView}>
            <View style={{ margin: 15 }}>
                <Text style={styles.textStyle}>
                    {item.trainName} ({item.trainNumber})
                </Text>
                <View
                    style={{
                        borderBottomWidth: 0.2,
                        marginVertical: 10,
                        borderColor: "grey",
                    }}
                ></View>
                <View style={styles.firstView}>
                    <Text style={styles.textStyle}>{item.time}</Text>
                    <Text style={styles.textStyle2}>-- {item.durationTime} --</Text>
                    <Text style={styles.textStyle}>{item.reachTime}</Text>
                </View>
                <View style={styles.firstView}>
                    <Text style={styles.textStyle2}>{item.From}</Text>
                    <Text style={styles.textStyle2}>{item.To}</Text>
                </View>
                <View style={styles.firstView}>
                    <Text style={styles.textStyle2}>{item.departureDate}</Text>
                    <Text style={styles.textStyle2}>{item.reachDate}</Text>
                </View>
            </View>

            <View style={styles.trainClassView}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity
                        onPress={() => {
                            setTrainClass(true)
                            setFooterView(true)
                        }}
                        style={[styles.TouchableClass, { backgroundColor: trainClass ? 'green' : null }]}
                    >
                        <Text style={styles.classText}>SL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.TouchableClass}
                    >
                        <Text style={styles.classText}>3A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.TouchableClass}
                    >
                        <Text style={styles.classText}>2A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.TouchableClass, { marginRight: 15 }]}
                    >
                        <Text style={styles.classText}>1A</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginHorizontal: 15,
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("CitySelection");
                    }}
                >
                    <AntDesign name="arrowleft" size={30} color={"black"} />
                </TouchableOpacity>

                <Text style={styles.headerText}>Train Details</Text>
                <View></View>
            </View>
            <FlatList
                data={updatedData}
                showsVerticalScrollIndicator={false}
                // ListHeaderComponent={<View style={styles.headerView}><Text style={styles.headerText}>Find Trains</Text></View>}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item, index) => item + index}
                ItemSeparatorComponent={
                    <View
                        style={{ width: "100%", borderBottomWidth: 3, borderColor: "grey" }}
                    />
                }
            />

            {footerView ? (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        width: "100%",
                        paddingVertical: 15,
                    }}
                >
                    <TouchableOpacity style={{ backgroundColor: "green", width: "45%" }}>
                        <Text style={styles.footerButtonText}>1350/- PRICE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "red", width: "45%" }} onPress={() => { props.navigation.navigate('PassengerDetails') }}>
                        <Text style={styles.footerButtonText}>PASSENGER DETAILS</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View></View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
    },

    mainView: {
        // padding: 10,
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        marginBottom: 10,
    },
    firstView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textStyle: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
    },
    headerView: {
        padding: 10,
        marginBottom: 10,
        flex: 1,
        alignSelf: "center",
    },
    textStyle2: {
        fontSize: 15,
        color: "grey",
        fontWeight: "700",
    },
    trainClassView: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 15,
        marginHorizontal: 10,
    },
    classText: {
        // borderWidth: 1.5,
        fontSize: 15,
        textAlign: "center",
        // borderColor: 'grey',
        // borderRadius: 10,
        color: "black",
        fontWeight: "bold",
        marginRight: 10,
        padding: 10,
        width: 100,
    },
    TouchableClass: {
        // backgroundColor: "green",
        borderWidth: 1.5,
        borderColor: "grey",
        borderRadius: 10,
        marginRight: 5,
    },

    footerButtonText: {
        borderWidth: 1.5,
        borderColor: "grey",
        color: "white",
        fontWeight: "bold",
        padding: 10,
        textAlign: "center",
    },
});
export default FindTrain;
