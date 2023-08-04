import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { categoryData } from "../../lib/GlobalConstant";


const ArrayStoreTask = () => {

    const [selectedCategory, setSelectedCategory] = useState();
    const [filteredItems, setFilteredItems] = useState(categoryData);

    const handleCategorySelect = (category) => {
        if (category === "All") {
            setFilteredItems(categoryData);
            // console.log('filteredItems ===>', filteredItems);
        } else {
            const filteredData = categoryData.filter((item) => item.category === category);
            // console.log('filtered =====>', filteredData);

            setFilteredItems(filteredData);
        }
        setSelectedCategory(category);
    };


    const renderItem = ({ item, index }) => {
        return (
            <View style={{ padding: 10 }}>
                <Text style={styles.textStyle}>Category ID : {item.categoryID}</Text>
                <Text style={styles.textStyle}>Category :  {item.category}</Text>
                <Text style={styles.textStyle}>Internal ID : {item.internalID}</Text>
                <Text style={styles.textStyle}>Question: {item.question}</Text>
                <Text style={styles.textStyle}>Answer: {item.answer}</Text>
            </View>
        );
    };



    // const categories = JSON.parse(categoryData)
    // console.log('categories in object', categories);
    // const arr = [
    //     {
    //         sid: 123,
    //         name: 'aaa'
    //     },
    //     {
    //         sid: 456,
    //         name: 'bbb'
    //     },
    //     {
    //         sid: 789,
    //         name: 'ccc'
    //     }
    // ];

    const result = filteredItems.reduce((obj, cur) => (
        { ...obj, [cur.category]: cur }
        // console.log('object ----', cur)
        )
        , {}
        )
   
    
   
    // ["All", "3G, 4G, LTE", "eSIM", "Tarife", "Kundenportal", "Freischalten",  "Allgemeines"];

    // const result = categoryData.reduce((obj, arr) => {
    //     arr.forEach((cur) => {
    //         obj[cur.category] = cur;
    //     });
    //     console.log('categories in object', result);
    //     return obj;
    // }, {});

    return (
        <View style={styles.mainContainer}>

            <View style={styles.headingContainer} >

                {Object.values(result).map((item) => (
                    // <ScrollView horizontal={true} style={{flex:1}} >

                  
                    <TouchableOpacity
                        key={item.category}
                        onPress={() => handleCategorySelect(item.category)}
                        style={{ margin: 10, padding:10}}
                    >
                        <Text
                            style={[styles.heading, {
                                color: item === selectedCategory ? "blue" : "black"
                            }
                            ]}
                        >
                            {item.category}
                        </Text>
                    </TouchableOpacity>
                    // </ScrollView>
                ))}
            </View>

            <FlatList
                data={filteredItems}
                renderItem={renderItem}
                keyExtractor={(item, index) => item + index}
                ItemSeparatorComponent={
                    <View style={styles.itemSeparatorComponentStyle} />
                }
            />
        </View>
    );

};
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    textStyle: {
        fontSize: 15,
        color: "black",
    },
    heading: {
        fontSize: 15,
        fontWeight: 'bold',
        // width:'40%'
        // marginHorizontal:20
    },
    headingContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        // marginHorizontal:20
    },

    itemSeparatorComponentStyle: {
        height: 1,
        width: "100%",
        backgroundColor: "grey",
    },
})

export default ArrayStoreTask;
