
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { useAuth } from '../../navigation/AuthContext';
import {
  ContainerLogin,
  Divisor,
  GoogleLoginButton,
  InputLogin,
  InputText,
  Line,
  LoginButton,
  TextButton,
  TextButtonGoogle,
  TextOption,
  Title
} from './styles';

import { useNavigation } from '@react-navigation/native';
const image = require('../../assets/images/background-welcome.png');
const iconGoogle = require('../../assets/images/icons8-google.png');
const arrow = require('../../assets/images/arrow.png');

const Login = () => { 
  const { signIn } = useAuth();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F1F5' }}>
      <ImageBackground source={image} style={{ flex: 3, zIndex: 2 }} resizeMode="stretch">
        <TouchableOpacity style={{ position: 'absolute', left: 5, top: 8 }} onPress={() => navigation.goBack()}>
          <Image source={arrow} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
        <Title>Log In to Your Account!</Title>
        <ContainerLogin
          style={{
            borderTopStartRadius: 56,
            borderTopEndRadius: 56,
            borderBottomStartRadius: 0,
            borderBottomEndRadius: 0,
          }}>
          <View>
            <InputText>Email :</InputText>
            <InputLogin />
          </View>
          <View>
            <InputText>Password :</InputText>
            <InputLogin />
          </View>
          <Shadow
            radius={30} distance={6}
            startColor="#6998ab29"
            offset={[40, 27]} viewStyle={{ alignSelf: 'center', marginTop: 25 }}>
            <LoginButton>
              <TextButton>LOG IN</TextButton>
            </LoginButton>
          </Shadow>
          <Divisor>
            <Line />
            <TextOption>or</TextOption>
          </Divisor>
          <GoogleLoginButton>
            <TextButtonGoogle>Login with google</TextButtonGoogle>
            <Image source={iconGoogle} style={{ width: 40, height: 40 }} />
          </GoogleLoginButton>
        </ContainerLogin>
      </ImageBackground>
      <View style={{ flex: 2 }}></View>
    </SafeAreaView>
  );
};

export default Login;