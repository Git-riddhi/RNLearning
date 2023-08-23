import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


const HorizontalFlatList = () => {
  const data = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const FlatListInFlatlist = () => {
  const outerData = [
    { id: 'a', title: 'List 1' },
    { id: 'b', title: 'List 2' },
    { id: 'c', title: 'List 3' },
  ];

  const renderOuterItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <HorizontalFlatList />
    </View>
  );

  return (
    <FlatList
      data={outerData}
      renderItem={renderOuterItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  itemContainer: {
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#ededed',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default FlatListInFlatlist;
