import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import moment from 'moment';

export const addUser = (data, date: any) => {
  database()
    .ref(`/users/personalData/${auth().currentUser.uid}`)
    .set({
      userId: auth().currentUser.uid,
      name: data.name,
      surname: data.surname,
      dateOfBirth: date,
    })
    .then(() => console.log('Data set.'));
};
