
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Image } from 'react-native';

import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';


const ApiIntegration = () => {

//   const getDataUsingFetch = () => {

//     fetch('https://cat-fact.herokuapp.com/facts', {
//       method: 'GET',
//     })
//       .then((response) => response)
//       .then((responseJson) => {
//         console.log("GET", responseJson);
//       })
//       .catch((error) => {
//         // Alert.alert(JSON.stringify(error));
//         console.error("error", error);
//       });
//   };



  const getDataUsingAxios = async () => {
    try {
      const response = await axios.get(
        'https://cat-fact.herokuapp.com/facts',
      );
      console.log('response ===>', response);
    } catch (error) {
     console.log('error ==>', error);
    }
  };


  // const Item = ({ item }) => {
  //   // console.log("item", item);
  //   return (
  //     <View style={styles.mainView}>

  //       <View style={styles.firstView}>

  //         <Image style={styles.image} resizeMode={'contain'} source={require('./assets/letter-r.png')} />

  //         <Text style={styles.text_Style}>{item.name}
  //         </Text>
  //         <Text style={styles.text_Style}>{item.age}</Text>
  //       </View>
  //       <View style={styles.secondView}>

  //         <Text style={styles.textStyle2}>{item.colour}</Text>
  //         {/* <Text style={styles.textStyle2}>{item.}</Text> */}
  //       </View>
  //     </View>
  //   )


  return (
    <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>

     
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={getDataUsingAxios}>
              <Text style={styles.textStyle}>
                Get Data Using GET
              </Text>
            </TouchableOpacity>

        
          </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
    padding: 10,
    marginVertical: 10,
  },

  mainView: {
    borderWidth: 2,
    borderColor: 'grey',
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    borderRadius: 10,
    marginBottom: 10
  },


  firstView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text_Style: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10
  },
  textStyle2: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10
  },

  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  },
  headerView: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'lightblue',
    flex: 1,
    alignSelf: 'center'
  },
  image: {
    width: 40,
    height: 40,
  },


});

export default ApiIntegration;
