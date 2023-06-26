import ReactNativeLocalization from 'react-native-localization';

const localization = new ReactNativeLocalization({
  en: {
    greeting: 'Hello, Welcome to React native ',
  }, //English
  fr: {
    greeting: 'Bonjour, Bienvenue sur React natif',
  }, //French
  ar: {
    greeting: ' مرحبا مرحبا بكم ,في ',
  }, //Arabic
  ch: {
    greeting: '您好，歡迎來到 ',
  }, //China
});

export default localization;
