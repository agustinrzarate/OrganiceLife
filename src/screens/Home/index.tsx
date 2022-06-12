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
import Input from '../../shared/components/Input';
import {Formik} from 'formik';
import {RegisterSchema} from './../../utils/shemas/RegisterSchema';
import {addUser} from './../../utils/api/user';
import {addTask} from '../../utils/api/tasks';
import moment from 'moment';

const background = require('../../assets/images/background-home.png');
const Home = () => {
  const logOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  const submit = (values: any) => {
    let date = moment(values.dateOfBirth);
    addUser(values, date);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1A374D'}}>
      <ImageBackground
        source={background}
        resizeMode="stretch"
        style={{flex: 1}}>
        <ButtonLogOut onPress={logOut}>
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
        <Formik
          validationSchema={RegisterSchema}
          initialValues={{name: '', surname: '', dateOfBirth: ''}}
          onSubmit={values => submit(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <MyModal
              title=" Complete your personal data to have a better experience!"
              sumbitText="Sumbit"
              onSumbit={handleSubmit}
              isValid={isValid}>
              <Input
                label="Name"
                placeholder="Type your name"
                onChange={handleChange('name')}
                onBlur={handleBlur('name')}
                error={errors.name}
                value={values.name}
              />
              <Input
                label="Surname"
                placeholder="Type your surname"
                onChange={handleChange('surname')}
                onBlur={handleBlur('surname')}
                error={errors.surname}
                value={values.surname}
              />
              <Input
                label="Date of birth"
                placeholder="YYYY-MM-DD"
                onChange={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                error={errors.dateOfBirth}
                value={values.dateOfBirth}
              />
            </MyModal>
          )}
        </Formik>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
