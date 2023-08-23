import React from 'react';
import { Text, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"

const data = [
    { showName: 'Riddhi', coach: 'D6', seat: '42' },
    { showName: 'Anshita', coach: 'D6', seat: '40' },
];

const ConfirmTicket = (props) => {

    const { item } = props?.route?.params;
    // console.log('item====>', item);

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.showName}</Text>
            <Text style={styles.cell}>{item.coach}</Text>
            <Text style={styles.cell}>{item.seat}</Text>
        </View>
    );


    return (
        <View style={{ flex: 1 }}>
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
                        props.navigation.navigate("PassengerDetails", { item });
                    }}
                >
                    <AntDesign name="arrowleft" size={30} color={"black"} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginVertical: 10 }}>CONFIRMATION TICKET</Text>
                <View></View>
            </View>

            <View style={{ flex: 1, borderWidth: 1, borderColor: 'grey', margin: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', margin: 15, }}>Passengers : 2</Text>

                </View>

                <View style={styles.mainView}>
                    <View style={{ margin: 15, }}>
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


                    <TouchableOpacity style={styles.trainClassView}
                    >
                        <Text style={styles.classText}>AC Chair car (CC)</Text>
                    </TouchableOpacity>


                </View>

                <Text style={styles.details}>Passenger Details</Text>
                <View style={styles.tableContainer}>
                    <View style={styles.header}>
                        <Text style={styles.tableHeader}>Name</Text>
                        <Text style={styles.tableHeader}>Coach</Text>
                        <Text style={styles.tableHeader}>Seat</Text>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

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
                        <Text style={styles.footerButtonText}>1550/- TOTAL PRICE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: "red", width: "45%" }}
                        onPress={() => {
                            props.navigation.navigate("PassengerDetails");
                        }}
                    >
                        <Text style={styles.footerButtonText}>DOWNLOAD TICKET</Text>
                    </TouchableOpacity>
                </View>
           
            </View>

        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
 
    mainView: {
        // backgroundColor: 'red',

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
    textStyle2: {
        fontSize: 15,
        color: "grey",
        fontWeight: "700",
    },
    trainClassView: {
        alignSelf: "center",

    },
    classText: {
        fontSize: 15,
        textAlign: "center",
        color: "black",
        borderWidth: 1,
        padding: 5,
        backgroundColor: 'lightgrey',
        fontWeight: "bold",

    },
    tableContainer: {
        flex: 1,
        padding: 16,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
      },
      tableHeader: {
        fontWeight: 'bold',
        // flex: 1,
        textAlign: 'center',
        color:'black',
        fontSize:16,
        width:50,
        // backgroundColor:'red'
       
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
      },
      cell: {
        // flex: 1,
        textAlign: 'center',
        color:'black',
        width:50,
        // backgroundColor:'red'
      },
      details:{
        fontSize:17,
        color:'black', fontWeight:'bold',
        marginHorizontal:15,
        marginTop:40

      },
      footerButtonText:{
        borderWidth: 1.5,
        borderColor: "grey",
        color: "white",
        fontWeight: "bold",
        padding: 10,
        textAlign: "center",
    },
      
})

export default ConfirmTicket;
