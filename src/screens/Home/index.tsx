/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, Text} from 'react-native';
import {ScreenNames} from '../../navigation/ScreenNames';
import {navigate} from '../../navigation/RootNavigator';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native';

const background = require('../../assets/images/background-home.png');
const Home = () => {
  const logOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1A374D'}}>
      <ImageBackground
        source={background}
        resizeMode="stretch"
        style={{flex: 1}}>
        <Text>hddd</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
