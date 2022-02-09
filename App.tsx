/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Back from './src/assets/images/back.svg';

const {width} = Dimensions.get('window')
const image = require('./src/assets/images/welcome-background.png');
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground style={{flex: 1}} source={image}>
          <View style={{ flex: 1 }}></View>
      </ImageBackground>
      <View style={{flex: 1}}></View>
    </SafeAreaView>
  );
};

export default App;
