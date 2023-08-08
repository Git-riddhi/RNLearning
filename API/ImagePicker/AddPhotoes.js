import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const App = () => {
  const [photos, setAddPhotos] = useState(null);
  const [photo, setAddphoto] = useState(null);

 
  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    })
      .then((images) => {
        setAddphoto(null);
        setAddPhotos(
          images.map((i) => {
            console.log('recieved image', i);
            return {
              uri: i.path,
              // width: i.width,
              // height: i.height,
              width: 185,
              height: 128,
              mime: i.mime,
            };
          }),
        );
      })
      .catch((e) => alert(e));
  };

  const renderImage = (image) => {
    return (
      <Image
        style={{
          width: 185,
          height: 128,
          resizeMode: 'contain',
          marginTop: 1,
        }}
        source={image}
      />
    );
  };

  const renderAsset = (image) => {
    return renderImage(image);
  };



  return (
    <View style={{flex: 1}}>
      {console.log('PHOTOS', photos)}
      {photos === null ? (
        <View style={{flex: 1}}>
          <View style={Styles.headerWrapper}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Icon name="angle-left" size={30} />
              <TouchableOpacity style={{right: '10%', top: '2%'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  SAVE AND EXIT
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
            <Text style={Styles.headerText}>Add photos to your listing</Text>
            <Text style={Styles.subHeader}>
              Photos help guests imagine staying in your place. You can start
              with one and add more after you publish.
            </Text>
            <View style={Styles.container}>
              <TouchableOpacity onPress={() => handleChoosePhoto()}>
                <View
                  style={{
                    backgroundColor: '#20B2AA',
                    width: 150,
                    height: 40,
                    borderRadius: 5,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    Add photos
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              right: '5%',
              position: 'absolute',
              bottom: 10,
            }}>
            <View
              style={{
                borderColor: '#20B2AA',
                borderWidth: 1,
                alignSelf: 'flex-end',
                padding: 10,
              }}>
              <Text
                style={{fontSize: 15, fontWeight: 'bold', color: '#20B2AA'}}>
                Skip For Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={{flex: 1}}>
            <View style={Styles.headerWrapper}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Icon name="angle-left" size={30} />
                <TouchableOpacity style={{right: '10%', top: '2%'}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    SAVE AND EXIT
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView>
              <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                {photos
                  ? photos.map((i) => (
                      <View
                        style={{
                          // width: 185, height: 128,

                          //  width:'50%',
                          flexBasis: '33.33%',
                        }}
                        key={i.uri}>
                        {renderAsset(i)}
                      </View>
                    ))
                  : null}
              </View>
            </ScrollView>
            <TouchableOpacity
       
              style={{
                alignSelf: 'flex-end',
                right: '5%',
                position: 'absolute',
                bottom: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#20B2AA',
                  alignSelf: 'flex-end',
                  padding: 10,
                }}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#FFF'}}>
                  NEXT
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default App;
const Styles = StyleSheet.create({
  headerWrapper: {
    width: deviceWidth,
    paddingLeft: 24,
    paddingTop: 10,
    paddingBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingLeft: 24,
  },
  container: {
    padding: 24,
  },
  subHeader: {
    paddingLeft: 24,
    fontSize: 17,
    paddingTop: 24,
    paddingRight: 24,
  },
});