/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import {Formik} from 'formik';
import {Shadow} from 'react-native-shadow-2';

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
  TextError,
  TextOption,
  Title,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from './../../redux/app/hooks';
import {fetchSignIn} from '../../redux/sagaActions/Auth/auth.actions';
import {errorAuth} from '../../redux/slices/authSlice';
import {LoginSchema} from '../../utils/shemas/LoginSchema';
const image = require('../../assets/images/background-welcome.png');
const iconGoogle = require('../../assets/images/icons8-google.png');
const arrow = require('../../assets/images/arrow.png');

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const errorSelector = useAppSelector(state => state.auth.error);

  const submit = values => {
    Keyboard.dismiss();
    dispatch(fetchSignIn(values));
  };

  const onFocusEmail = () => {
    if (!errorSelector) {
      return;
    }
    dispatch(errorAuth(null));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F3F1F5'}}>
      <ImageBackground
        source={image}
        style={{flex: 3, zIndex: 2}}
        resizeMode="stretch">
        <TouchableOpacity
          style={{position: 'absolute', left: 5, top: 8}}
          onPress={() => navigation.goBack()}>
          <Image source={arrow} style={{height: 40, width: 40}} />
        </TouchableOpacity>
        <Title>Log In to Your Account!</Title>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values => submit(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <ContainerLogin
              style={{
                borderTopStartRadius: 56,
                borderTopEndRadius: 56,
                borderBottomStartRadius: 0,
                borderBottomEndRadius: 0,
              }}>
              <View>
                <InputText>Email :</InputText>
                <InputLogin
                  placeholder="Email Address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  onFocus={onFocusEmail}
                />
                <TextError>{errors.email}</TextError>
              </View>
              <View>
                <InputText>Password :</InputText>
                <InputLogin
                  onFocus={onFocusEmail}
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                <TextError>{errors.password}</TextError>
              </View>
              {errorSelector && <TextError>{errorSelector}</TextError>}
              <Shadow
                radius={30}
                distance={6}
                startColor="#6998ab29"
                offset={[40, 27]}
                viewStyle={{alignSelf: 'center', marginTop: 25}}>
                <LoginButton
                  onPress={() => handleSubmit()}
                  disabled={!isValid}
                  style={!isValid ? {opacity: 0.3} : {opacity: 1}}>
                  <TextButton>LOG IN</TextButton>
                </LoginButton>
              </Shadow>
              <Divisor>
                <Line />
                <TextOption>or</TextOption>
              </Divisor>
              <GoogleLoginButton>
                <TextButtonGoogle>Login with google</TextButtonGoogle>
                <Image source={iconGoogle} style={{width: 40, height: 40}} />
              </GoogleLoginButton>
            </ContainerLogin>
          )}
        </Formik>
      </ImageBackground>
      <View style={{flex: 2}} />
    </SafeAreaView>
  );
};

export default Login;
