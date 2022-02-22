import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {navigate} from '../../navigation/RootNavigator';
import {ScreenNames} from '../../navigation/ScreenNames';
import {
  ButtonContainer,
  ImageBackground,
  LoginButton,
  SignInButton,
  Subtitle,
  TextButton,
  Title,
} from './styles';

const image = require('../../assets/images/background-welcome.png');

const Welcome = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F3F1F5'}}>
      <ImageBackground source={image} resizeMode="stretch">
        <View>
          <Title>Welcome</Title>
          <Subtitle>Organize your life</Subtitle>
        </View>
      </ImageBackground>
      <ButtonContainer>
        <Shadow radius={30} distance={6} startColor="#6998ab29" offset={[0, 4]}>
          <LoginButton onPress={() => navigate(ScreenNames.Login)}>
            <TextButton>LOG IN</TextButton>
          </LoginButton>
        </Shadow>
        <Shadow
          radius={30}
          distance={6}
          startColor="#6998ab29"
          offset={[0, 24]}
          viewStyle={{marginTop: 20}}>
          <SignInButton onPress={() => navigate(ScreenNames.SignUp)}>
            <TextButton>SIGN UP</TextButton>
          </SignInButton>
        </Shadow>
      </ButtonContainer>
    </SafeAreaView>
  );
};

export default Welcome;
