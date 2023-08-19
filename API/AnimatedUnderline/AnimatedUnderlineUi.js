import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";

const AnimatedUnderlineUi = () => {
  const [activeTab, setActiveTab] = useState(0);

  const screenWidth = Dimensions.get("window").width;
  const tabWidth = screenWidth / 2;
  const [underlineWidth] = useState(new Animated.Value(0));


  // const handleTabPress = (tabIndex) => {
  //   if (tabIndex !== activeTab) {
  //     console.log('tabIndex =====>', tabIndex)
  //     Animated.timing(underlineWidth, {
  //       toValue: tabIndex === 1 ? tabWidth : 0,
  //       duration: 900,
  //       useNativeDriver: false,
  //     }).start(() => {
  //       setActiveTab(tabIndex);
  //     });
  //   }
  // };

  const handleTabPress = (tabIndex) => {
    if (tabIndex !== activeTab) {
      const targetWidth = tabIndex === 1 ? tabWidth : 0;
      const reverseAnimation = Animated.timing(underlineWidth, {
        toValue: targetWidth,
        duration: 400,
        useNativeDriver: false,
      });
      reverseAnimation.start(() => {
        setActiveTab(tabIndex);
        // reverseAnimation.start();
      });
    }
  };


  const renderContent = () => {
    if (activeTab === 0) {
      return <Text>Tab 1 Content</Text>;
    } else if (activeTab === 1) {
      return <Text>Tab 2 Content</Text>;
    }
  };

  const tabUnderlineStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: tabWidth,
    height: 2,
    backgroundColor: "#b8860b",
    transform: [
      {
        translateX: underlineWidth,
        // underlineWidth.interpolate({
        //   inputRange: [0, 50, 100],
        //   outputRange: [0, tabWidth/2, tabWidth],
        // }),
      },
    ],
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innercontainer}>
        <View style={styles.contentView}>
          <TouchableOpacity
            style={[styles.tab]}
            onPress={() => handleTabPress(0)}
          >
            <Text style={[styles.tabText]}>Tariff</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab]}
            onPress={() => handleTabPress(1)}
          >
            <Text style={[styles.tabText]}>Options</Text>
          </TouchableOpacity>

          <Animated.View style={tabUnderlineStyle} />
        </View>
        <View
          style={{ borderBottomWidth: 0.17, borderBottomColor: "grey" }}
        ></View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {renderContent()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "grey",
    flex: 1,
  },
  innercontainer: {
    backgroundColor: "white",
    height: "70%",
    width: "100%",
    borderRadius: 30,
    marginTop: 40,
  },
  contentView: {
    flexDirection: "row",
    width: "100%",
  },
  tab: {
    flex: 1,
    zIndex: 5,
    alignItems: "center",
    paddingVertical: 10,
    borderRightWidth: 0.2,
    borderRightColor:'grey'
  },
  activeTab: {
    borderBottomWidth: 3,
    borderColor: "#b8860b",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
    // color: 'black',
  },

  underline: {
    height: 2,
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
  },
});

export default AnimatedUnderlineUi;
