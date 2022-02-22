/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik} from 'formik';
import {Shadow} from 'react-native-shadow-2';

import {
  ContainerSignIn,
  Divisor,
  GoogleSignInButton,
  InputSignIn,
  InputText,
  Line,
  SignInButton,
  TextButton,
  TextButtonGoogle,
  TextError,
  TextOption,
  Title,
} from './styles';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from './../../redux/app/hooks';
import {fetchSignUp} from './../../redux/sagaActions/Auth/auth.actions';
const image = require('../../assets/images/background-welcome.png');
const iconGoogle = require('../../assets/images/icons8-google.png');
const arrow = require('../../assets/images/arrow.png');

const SignUp = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(14, 'Too Long!')
      .required('Required'),
  });

  const submit = values => {
    dispatch(fetchSignUp(values));
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
        <Title>Create your account!</Title>
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
            <ContainerSignIn
              style={{
                borderTopStartRadius: 56,
                borderTopEndRadius: 56,
                borderBottomStartRadius: 0,
                borderBottomEndRadius: 0,
              }}>
              <View>
                <InputText>Email :</InputText>
                <InputSignIn
                  placeholder="Email Address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                <TextError>{errors.email}</TextError>
              </View>
              <View>
                <InputText>Password :</InputText>
                <InputSignIn
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                <TextError>{errors.password}</TextError>
              </View>
              <Shadow
                radius={30}
                distance={6}
                startColor="#6998ab29"
                offset={[40, 27]}
                viewStyle={{alignSelf: 'center', marginTop: 25}}>
                <SignInButton
                  onPress={() => handleSubmit()}
                  disabled={!isValid}>
                  <TextButton>SIGN IN</TextButton>
                </SignInButton>
              </Shadow>
              <Divisor>
                <Line />
                <TextOption>or</TextOption>
              </Divisor>
              <GoogleSignInButton>
                <TextButtonGoogle>Sign In with google</TextButtonGoogle>
                <Image source={iconGoogle} style={{width: 40, height: 40}} />
              </GoogleSignInButton>
            </ContainerSignIn>
          )}
        </Formik>
      </ImageBackground>
      <View style={{flex: 2}} />
    </SafeAreaView>
  );
};

export default SignUp;
