import axios from "axios";
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

const FlatListWithRefreshControl = () => {
    const [refreshing, setRefreshing] = useState(true);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = () => {
        fetch(`https://randomuser.me/api/?results=5000?`,
            {
                method: "GET",
                headers:{'Content-Type': "application/json"}
            })
            .then((response) => response.json())
            .then((responseJson) => {
                setRefreshing(false);
                // console.log('response Json ===>', responseJson);
                var newdata = userData.concat(responseJson.results);
                setUserData(newdata);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const Item = ({ item }) => {
        return (
            <View style={styles.itemContainerStyle}>
                <Text style={styles.textStyle}>Email : {item.email}</Text>
                <Text style={styles.textStyle}>
                    Name : {item.name.first} {item.name.last}
                </Text>
            </View>
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <View>
                {refreshing ? <ActivityIndicator /> : null}
                <Text
                    style={styles.headingStyle}
                >
                    Largest FlatList Data
                </Text>
                <FlatList
                    data={userData}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={
                        <View style={styles.itemSeparatorComponentStyle} />
                    }
                    renderItem={({ item }) => <Item item={item} />}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={loadUserData} />
                    }
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
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
        padding: 10
    },
    textStyle: {
        fontSize: 15,
        color: "black",
    },
});

export default FlatListWithRefreshControl;
