import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  defaultTitleStyle: {
    fontSize: 14,
    color: Config.WHITE,
    paddingHorizontal: 10,
    letterSpacing:0
  },
  defaultBlackTitleStyle: {
    fontSize: 14,
    color: Config.BLACK,
    paddingHorizontal: 10,
    letterSpacing:0
  },
  defaultButtonStyle: {
    height: 47,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor:  Config.DARK_BLUE,
    // alignSelf: 'center',
    borderWidth: 1,
    borderColor:  Config.DARK_BLUE,
    elevation:0
  },
  defaultWhiteButtonStyle: {
    height: 47,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor:Config.WHITE,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor:Config.WHITE,
    elevation:0
  },
  disableButtonStyle:{
    height: 47,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor:Config.GRAY2,
    alignSelf: 'center',
    elevation:0,
    borderRadius:0,
    width:'100%'
  },
  defaultBlackButtonStyle: {
    height: 47,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor:Config.BLACK,
    alignSelf: 'center',
    elevation:0,
    borderRadius:0,
    width:'100%'
  },
  defaultGreyButtonStyle: {
    height: 47,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: Config.DARK_GREY,
    // alignSelf: 'center',
    borderWidth: 1,
    borderColor:Config.DARK_GREY,
    elevation:0
  }
});