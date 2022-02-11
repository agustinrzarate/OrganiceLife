
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { useAuth } from '../../navigation/AuthContext';

const Login = () => {
  const {signIn} = useAuth();
  return (
    <TouchableOpacity onPress={signIn} >
        <Text>Log in</Text>
    </TouchableOpacity>
  );
};

export default Login;