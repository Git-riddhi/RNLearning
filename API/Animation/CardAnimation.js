import React from 'react';
import { View, StyleSheet,  Text, FlatList, Dimensions, Image, SafeAreaView, StatusBar, Animated, } from 'react-native';

const DATA = [
  {
    title: 'Afro vibes',
    location: 'Mumbai, India',
    date: 'Nov 17th, 2020',
    poster: require('../../assets/Afro-vibes-flyer-template.jpg'),

  },
  {
    title: 'Summer festival',
    location: 'Bucharest, Romania',
    date: 'Aug 17th, 2020',
    poster: require('../../assets/Summer-Music-Festival-Flyer-.jpg')
  },
  {
    title: '4th Of July',
    location: 'New York, USA',
    date: 'Oct 11th, 2020',
    poster: require('../../assets/Flyer_Design.jpg')
  },
  
  {
    title: 'Jungle Party',
    location: 'Unknown',
    date: 'Sept 3rd, 2020',
    poster: require('../../assets/Jungle-Party-Flyer-Template-1.jpg')
  },
  {
    title: 'BBQ with friends',
    location: 'Prague, Czech Republic',
    date: 'Sept 11th, 2020',
    poster: require('../../assets/Invitation.jpg')
  },
  {
    title: 'Festival music',
    location: 'Berlin, Germany',
    date: 'Apr 21th, 2021',
    poster: require('../../assets/Festival-Music-PSD-Template.jpg')
  },
  {
    title: 'Beach House',
    location: 'Liboa, Portugal',
    date: 'Aug 12th, 2020',
    poster: require('../../assets/Summer-Beach-House-Flyer.jpg')
  },
];

const { width } = Dimensions.get('screen');

const OVERFLOW_HEIGHT = 70;
const ITEM_WIDTH = width * 0.80;
const ITEM_HEIGHT = ITEM_WIDTH * 1.6;

const CardAnimation = () => {

  const [data, setData] = React.useState(DATA);

  return (
    <View style={styles.container}>

      <SafeAreaView style={styles.container}>

        <FlatList
          data={DATA}
          keyExtractor={(_, index) => String(index)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 20 }}
          ItemSeparatorComponent={<View style={{ width: 20 }} />}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={item.poster}
                style={{
                  width: ITEM_WIDTH,
                  height: ITEM_HEIGHT,
                  borderRadius: 14,
                }}
              />
              <Text style={styles.title} numberOfLines={1}>
                {item.title}
              </Text>
              <View style={styles.itemContainerRow}>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: 20,
  },
  itemContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },

});


export default CardAnimation;
