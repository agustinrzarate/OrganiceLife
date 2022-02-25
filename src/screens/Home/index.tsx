/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import {ScreenNames} from '../../navigation/ScreenNames';
import {navigate} from '../../navigation/RootNavigator';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native';
import {
  ButtonLogOut,
  ContainerButtons,
  ContainerHeader,
  Date,
  Greeting,
  LogOut,
} from './styles';
import LogOutSvg from './../../assets/icons/LogOutSvg';
import Button from '../../shared/components/Button';
import {IconButtonsTypes} from '../../utils/types/iconButtonTypes';
import MyModal from '../../shared/components/MyModal';

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
        <ButtonLogOut>
          <LogOut>Log Out</LogOut>
          <LogOutSvg />
        </ButtonLogOut>
        <ContainerHeader>
          <Greeting>Hello, Agustin</Greeting>
          <Date>11/21</Date>
        </ContainerHeader>
        <ContainerButtons>
          <Button title="Create" type={IconButtonsTypes.CREATE} />
          <Button title="Calendar" type={IconButtonsTypes.CALENDAR} />
          <Button title="Work time" type={IconButtonsTypes.WORK_TIME} />
          <Button title="Study statistics" type={IconButtonsTypes.STATISTICS} />
        </ContainerButtons>
        <MyModal />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
