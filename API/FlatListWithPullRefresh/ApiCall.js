import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Alert,
    ScrollView,
    Image,
    FlatList,
    RefreshControl,
    Button,
} from "react-native";

import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    ActivityIndicator,
} from "react-native";

const ApiCall = () => {
    const [refreshing, setRefreshing] = useState(true);
    const [userData, setUserData] = useState([]);

    // useEffect(() => {
    //     loadUserData();
    // }, []);

    const loadUserData = async (page_index, country_id, ws_token) => {
        // var inputParams = {
        //     page_index: 1,
        //     country_id: `a8b086ab26d4571afd41c5cafa8adf`,
        //     ws_token: 'f02c92c68bdf74f35d125c9f9361bfaa2fd78ec20480de38ee759ca31efe8e40',
        // };


        // console.log("inputParams", inputParams);
        // fetch(
        //     `https://guuruume.projectspreview.net/WS/country_with_states?country_id=${inputParams.country_id}?page_index=${inputParams.page_index}&ws_token=${inputParams.ws_token}`,
        //     {
        //         method: "GET",
        //     }
        // )
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         setRefreshing(false);
        //         console.log("response Json ===>", responseJson);
        //         var newdata = userData.concat(responseJson.data.mc_country_id);
        //         console.log('newdata===>', newdata);
        //         setUserData(newdata);
        //     })
        //     .catch((error) => {
        //         console.log("error", error);
        //     });

        // var myHeaders = new Headers();
        // myHeaders.append("Cookie", "ci_session=s9sfgo999o8lhvcbtf0gvtv36e205f4g");

        // var requestOptions = {
        //   method: 'GET',
        //   headers: myHeaders,
        //   redirect: 'follow'
        // };

        // fetch("https://guuruume.projectspreview.net/WS/country_with_states?country_id=a8b086ab26d4571afd41c5cafa1f8adf&page_index=1&ws_token=f02c92c68bdf74f35d125c9f9361bfaa2fd78ec20480de38ee759ca31efe8e40", requestOptions)
        //   .then(response => response.text())
        //   .then(result => console.log(result))
        //   .catch(error => console.log('error', error));

        
        const response = await axios({
            url: 'https://guuruume.projectspreview.net/WS/country_with_states',
            method: 'get',
            headers: {Cookie: 'ci_session=ja55b64bivqkknea7qc11md3pkota828'},
            params:
            {
                page_index: 1,
                country_id: `a8b086ab26d4571afd41c5cafa8adf`,
                ws_token: '07ee48ece4d5a779d1db04e117b837b734f4b2e4a50a6bb8ad63e8e01ac16f9a',
            }
        })

        console.log('response===>', response.data);



    };

    // const Item = ({ item }) => {
    //     return (
    //         <View style={{ flex: 1, padding: 10 }}>
    //             <Text
    //                 style={{
    //                     fontSize: 15,
    //                     color: "black",
    //                 }}
    //             >
    //                 {/* {item.email} */}
    //             </Text>
    //             <Text
    //                 style={{
    //                     fontSize: 15,
    //                     color: "black",
    //                 }}
    //             >
    //                 {/* {item.name.first}  {item.name.last} */}
    //             </Text>
    //         </View>
    //     );
    // };

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
            <View>
                {/* {refreshing ? <ActivityIndicator /> : null} */}
                {/* <FlatList
                    data={userData}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={
                        <View
                            style={{
                                height: 1,
                                width: "100%",
                                backgroundColor: "#C8C8C8",
                            }}
                        />
                    }
                    renderItem={({ item }) => <Item item={item} />}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={loadUserData} />
                    }
                /> */}
                <Button title="api call" onPress={() => { loadUserData() }} />
                {/* <Text>Hello</Text> */}
            </View>
        </SafeAreaView>
    );
};

export default ApiCall;
