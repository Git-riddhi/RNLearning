// fetch(`https://randomuser.me/api/?results=${itemsPerPage * page}`,

//https://randomuser.me/api/?page=1&results=10

// https://jsonplaceholder.typicode.com/users

import React, { useEffect, useState } from "react";
import {
    Alert,
    ScrollView,
    Image,
    FlatList,
    RefreshControl,
} from "react-native";

import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    ActivityIndicator,
} from "react-native";

const FlatListDataWithPagination = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [userData, setUserData] = useState([]);
    // const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadUserData();
    }, [page]);

    const loadUserData = () => {
        // console.log(
        //     "api call===>",
        //     `https://randomuser.me/api/?results=15&page=${page}`
        // );

        fetch(
            `https://randomuser.me/api/?results=15&page=${page}`,

            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => response.json())
            .then((responseJson) => {
                // const allUsers = responseJson.results
                // // console.log('allUsers.length==>', allUsers.length);

                // const startIndex = (page - 1) * itemsPerPage;
                // // console.log('startIndex ===>', startIndex);

                // const endIndex = page * itemsPerPage;
                // // console.log('endIndex ===>', endIndex);

                // const usersForCurrentPage = allUsers.slice(startIndex, endIndex);
                // // console.log('usersForCurrentPage ===>', usersForCurrentPage);

                // setUserData((prevUsers) => [...prevUsers, ...usersForCurrentPage]);

                // setpage((prevpage) => prevpage + 1);

                // var newdata = userData.concat(responseJson.results);
                // setUserData(newdata)
                // setRefreshing(false);

                if (page === 1) {
                    setUserData(responseJson.results);
                    setRefreshing(false);
                } else {
                    var newdata = userData.concat(responseJson.results);
                    setUserData(newdata);
                    setRefreshing(false);
                }

                // Alert.alert(`${newdata.length}`)

                // if (newdata.length < 5000) {
                //     setRefreshing(true);

                // } else {
                //     setRefreshing(false);
                //     Alert.alert("no data");
                // }
            })
            .catch((error) => {
                console.error(error);
                setRefreshing(false);
            });
    };

    const Item = ({ item, index }) => {
        return (
            <View key={index} style={styles.itemContainerStyle}>
                <Image source={{ uri: item.picture.large }} style={styles.imageStyle} />
                <View style={styles.textView}>
                    <Text style={styles.textStyle}>
                        Name : {item.name.first} {item.name.last}
                    </Text>
                    <Text style={styles.textStyle}>Email : {item.email}</Text>
                    {/* <Text style={styles.textStyle}>Location : {item.location.city}</Text> */}
                    {/* <Text style={styles.textStyle}>DOB : {item.dob.date}</Text> */}
                </View>
            </View>
        );
    };

    const handlepage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleOnRefresh = () => {
        setRefreshing(true);
        setPage(1);
    };

    const renderFooter = () => {
        return !refreshing ? (
            <View style={{ marginVertical: 30 }}>
                <ActivityIndicator size="large" color="grey" />
            </View>
        ) : null;
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headingStyle}>User's Data</Text>
                <FlatList
                    data={userData}
                    keyExtractor={(item, index) => item + index}
                    ItemSeparatorComponent={
                        <View style={styles.itemSeparatorComponentStyle} />
                    }
                    renderItem={({ item }) => <Item item={item} />}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleOnRefresh}
                        />
                    }
                    ListFooterComponent={renderFooter}
                    onEndReachedThreshold={0.5}
                    onEndReached={handlepage}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    headingStyle: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    itemSeparatorComponentStyle: {
        height: 1,
        width: "100%",
        backgroundColor: "#C8C8C8",
    },
    itemContainerStyle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    textView: {
        marginLeft: 10,
        justifyContent: "center",
    },
    imageStyle: {
        height: 50,
        width: 50,
    },
    textStyle: {
        fontSize: 15,
        color: "black",
    },
    footer: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    loadMoreBtn: {
        padding: 10,
        backgroundColor: "green",
        borderRadius: 4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    btnText: {
        color: "white",
        fontSize: 15,
        textAlign: "center",
    },
});

export default FlatListDataWithPagination;
