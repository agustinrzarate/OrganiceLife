import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { useAuth } from '../../navigation/AuthContext';

const Login = () => {
  const {signOut} = useAuth();
  return (
    <TouchableOpacity onPress={signOut} >
        <Text>Home</Text>
    </TouchableOpacity>
  );
};

export default Login;