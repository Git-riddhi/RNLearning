import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image, TextInput, TouchableOpacity
} from 'react-native';

// const screenWidth = Dimensions.get('screen').width
// const screenHeight = Dimensions.get('screen').height


const ClientListing = [
  {
    "src": require(''),
    "name": "Anuj",
    "status": "Added 21 Jan 2021",
  
  },
  {
    "src": require('./assets/letter-a.png'),
    "name": "Aman",
    "number": "9596677895",
    "status": "Call"
  },
  {
    "src": require('./assets/letter-a.png'),
    "name": "Amit",
    "number": "8896487895",
    "status": "Call"
  },
  {
 "src": require('./assets/letter-a.png'),
    "name": "Ahan",
    "number": "7759685785",
    "status": "Call"
  },
 
 
]

const Item = ({ item }) => (
  <View style={styles.mainView}>

    <View style={styles.firstView}>

      <Image style={styles.image} resizeMode={'contain'} source={item.src} />

      <View>
        <Text style={styles.textStyle}>{item.name}</Text>
  <Text style={styles.textStyle2} >{item.number}</Text>
      </View>

    </View>

    <View style={styles.secondView}>
      <TouchableOpacity>
        <Text style={styles.textStyle3}>{item.status}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ClientList = () => {
  const [search, setSearch] = useState('')
  const [contactList, setContactList] = useState(contactListing)

  const searchFun = (input) => {

    setSearch(input)
    var a = contactListing.filter(word => word.name.match(input) || word.number.match(input))

    // console.log("Searching Data :", a)
    setContactList(a)

  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.search_View}>
        <View style={styles.searchView}>
          <Image
            source={require('./assets/download(1).png')}
            style={styles.Image1Style}
          />
<TextInput
            placeholder='Search'
            onChangeText={(search) => searchFun(search)}
            value={search}
          />
        </View>

        <Image
          source={require('./assets/user.png')}
          style={styles.Image2Style}
        />

      </View>

      <View style={styles.headerView}>
        <Text style={styles.headerText}>Contact List</Text>
      </View>

      <FlatList
        data={contactList}
        horizontal={false}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
      // numColumns={1}
      // ItemSeparatorComponent={<View style={{ width: 10, height: 10 }} />}
      />
      <StatusBar
        hidden={false}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
  searchView: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 30,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'grey',
    width: "80%",
    height: 40,
  },
  search_View: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  Image1Style: {
    padding: 10,
    margin: 7,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  Image2Style: {
    marginHorizontal: 10,
    padding: 10,
    margin: 5,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  mainView: {
    borderWidth: 2,
    borderColor: 'grey',
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 25,
    marginBottom: 10
  },
  headerText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    width: '100%',
  },
  firstView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10
  },
  textStyle2: {
    fontSize: 20,
    textAlign: 'center',
    color: 'grey',
    fontWeight: 'bold',
    marginLeft: 10
  },
  textStyle3: {
    fontSize: 20,
    color: 'green',
  fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10
  },
  headerView: {
    marginHorizontal: 10,
    height: 40,
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default ClientList;

