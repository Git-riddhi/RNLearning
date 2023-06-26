import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const ModalScreen = ({ cardTitle, title, dateTime, time, location, style, }) => {

  return (


    <View style={styles.mainView}>

      <Text style={styles.mainText}>{cardTitle}</Text>

      <View style={[styles.container, style]}>

        <View style={styles.firstContainer}>

          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
            <Icon name='dots-three-vertical' size={20} color={'black'} />
          </View>

          <Text style={{ marginHorizontal: 20, marginBottom: 10 }}>{dateTime}</Text>


          <View style={{ flexDirection: 'row' }} >
            <View>
              <View style={{ borderTopWidth: 1, borderTopColor: 'grey', marginHorizontal: 20, width: '85%', }}></View>
              <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 5 }}>
                <MaterialIcons name='watch-later' size={25} color={'black'} />
                <Text style={{ marginHorizontal: 20, }}>{time}</Text>
              </View>

              <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 5 }}>
                <EvilIcons name='location' size={30} color={'black'} />
                <Text style={{ marginHorizontal: 20, }}>{location}</Text>
              </View>
            </View>

            <Image
              source={require('../assets/YogaGirl.png')}
              style={styles.ImageStyle}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 10 }}>
            <Text style={{ marginHorizontal: 20, fontSize: 17, color: "blue", fontWeight: 'bold', marginBottom: 10, }}>Edit</Text>
            <Text style={{ marginHorizontal: 20, fontSize: 17, color: "blue", fontWeight: 'bold' }}>Cancel</Text>
          </View>
        </View>
      </View>

    </View>


  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  mainText: {
    fontSize: 15,
    marginVertical: 10
  },
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
  },
  firstContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    elevation: 5,
    width: '100%',
    marginTop: 10
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 20,
    margin: 10,
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  ImageStyle: {
    height: 70,
    width: 70,
    top: -10
  },

})

export default ModalScreen;

