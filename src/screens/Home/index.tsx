import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScreenNames } from '../../navigation/ScreenNames';
import { useAppSelector } from '../../redux/app/hooks';
import auth from '@react-native-firebase/auth';
import { navigate } from '../../navigation/RootNavigator';
import database from '@react-native-firebase/database';

const Home = () => {
  const responseSelector = useAppSelector(state => state.auth.response);

  /*  database()
     .ref(`/tasks/${auth().currentUser.uid}`)
     .push({
       name: 'Ada Lovelace',
       age: 32,
     })
     .then(() => console.log('Data set.')); */


  const getInfo = () => {
    console.log(responseSelector);
    navigate(ScreenNames.Edit);
  }

  const test = async () => {
    const response = await database()
      .ref(`/tasks/${auth().currentUser.uid}`)
      .orderByChild('age')
      .equalTo(58)
      .once('value');

    console.log(response);
  }

  test();

  return (
    <View>
      <TouchableOpacity onPress={getInfo}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 50, backgroundColor: '#000' }} onPress={() => navigate(ScreenNames.Edit)} >
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;