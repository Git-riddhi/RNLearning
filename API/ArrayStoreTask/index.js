import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import { categoryData } from "../../lib/GlobalConstant";

const ArrayStoreTask = () => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [filteredItems, setFilteredItems] = useState(categoryData);

    const [uniqueKeyArray, setUniqueKeyArray] = useState();
    const [categorys, setCategorys] = useState();

    const handleCategorySelect = (category) => {
        const filteredData = categorys[category];
        setFilteredItems(filteredData);
        setSelectedCategory(category);
    };

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ padding: 10 }}>
                <Text style={styles.textStyle}>Category ID : {item.categoryID}</Text>
                <Text style={styles.textStyle}>Category : {item.category}</Text>
                <Text style={styles.textStyle}>Internal ID : {item.internalID}</Text>
                <Text style={styles.textStyle}>Question: {item.question}</Text>
                <Text style={styles.textStyle}>Answer: {item.answer}</Text>
            </View>
        );
    };

    useEffect(() => {
        getUniqueCategoryObjectArray(categoryData);
    }, []);

    const getUniqueCategoryObjectArray = (categoryData) => {
        const uniqueCategoriesKeyArray = categoryData.reduce((acc, obj) => {
            if (!acc.includes(obj.category)) {
                acc.push(obj.category);
            }
            return acc;
        }, []);

        const resultObj = {};
        uniqueCategoriesKeyArray.map((item) => {
            resultObj[item] = [];
            return;
        });

        categoryData.map((item) => {
            const keyValue = item.category;
            resultObj[keyValue].push(item);
            return;
        });

        setUniqueKeyArray(uniqueCategoriesKeyArray);
        setCategorys(resultObj);
    };
    console.log("uniqueKeyArray", uniqueKeyArray);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headingContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {uniqueKeyArray &&
                        uniqueKeyArray.map((categoryDataKey) => (
                            <TouchableOpacity
                                key={categoryDataKey}
                                onPress={() => handleCategorySelect(categoryDataKey)}
                                style={styles.touchableView}
                            >
                                <Text
                                    style={[
                                        styles.heading,
                                        {
                                            color:
                                                categoryDataKey === selectedCategory ? "blue" : "black",
                                        },
                                    ]}
                                >
                                    {categoryDataKey}
                                </Text>
                            </TouchableOpacity>
                        ))}
                </ScrollView>
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
        flex: 1,
    },
    textStyle: {
        fontSize: 15,
        color: "black",
    },
    touchableView: {
        padding: 10,
        width: 150,
    },
    heading: {
        fontSize: 15,
        fontWeight: "bold",
        backgroundColor: "lightgrey",
        borderRadius: 20,
        textAlign: "center",
        padding: 10,
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
});

export default ArrayStoreTask;
