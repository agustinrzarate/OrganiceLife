import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const getTask = async () => {
  const task = await database()
    .ref(`/tasks/${auth().currentUser.uid}`)
    .orderByChild('age')
    .equalTo(58)
    .once('value');

  return task;
};

export const addTask = () => {
  database()
    .ref(`/users/${auth().currentUser.uid}`)
    .set({
      name: 'Ada Lovelace',
      age: 31,
    })
    .then(() => console.log('Data set.'));
};
