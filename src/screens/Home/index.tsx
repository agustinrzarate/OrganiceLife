import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../navigation/AuthContext';
import { navigate } from '../../navigation/RootNavigator';
import { ScreenNames } from '../../navigation/ScreenNames';

const Login = () => {
  const { signOut } = useAuth();
  return (
    <View>
      <TouchableOpacity onPress={signOut} >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 50, backgroundColor: '#000' }} onPress={() => navigate(ScreenNames.Edit)} >
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;