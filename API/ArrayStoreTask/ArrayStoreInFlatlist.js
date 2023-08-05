import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { categoryData } from "../../lib/GlobalConstant";


const ArrayStoreInFlatlist = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredItems, setFilteredItems] = useState(categoryData);

    const handleCategorySelect = (category) => {
        if (category === "All") {
            setFilteredItems(categoryData);
            // console.log('filteredItems ===>', filteredItems);
        } else {
            const filteredData = categoryData.filter((item) => item.category === category);
            // console.log('filtered =====>', filteredData);

            setFilteredItems(filteredData);

            // filteredItems.forEach(() => {
            //     // if (item.category == filteredData.category) {
            //     filteredItems[category] = filteredData
            //     console.log('filtered category array-----', filteredItems[category]);
            //     // }
            // })
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



    const categories = ["All", "3G, 4G, LTE", "eSIM", "Tarife",
        //  "Kundenportal", "Freischalten",  "Allgemeines"
    ];


    return (
        <View style={styles.mainContainer}>

            <View style={styles.headingContainer} >

                {categories.map((category) => (
                    <TouchableOpacity
                        key={category}
                        onPress={() => handleCategorySelect(category)}
                        style={{ paddingHorizontal: 10 }}
                    >
                        <Text
                            style={[styles.heading, {
                                color: category === selectedCategory ? "blue" : "black"
                            }
                            ]}
                        >
                            {category}
                        </Text>
                    </TouchableOpacity>
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
        fontWeight: 'bold'
    },
    headingContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
    },

    itemSeparatorComponentStyle: {
        height: 1,
        width: "100%",
        backgroundColor: "grey",
    },
})

export default ArrayStoreInFlatlist;
