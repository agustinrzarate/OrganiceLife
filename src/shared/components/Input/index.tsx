import React from 'react';
import {View} from 'react-native';
import {InputContainer, InputLabel, TextError} from './styles';

interface IInput {
  label: string;
  placeholder?: string;
  onChange: (any) => void;
  onBlur: (any) => void;
  value: string;
  secureTextEntry?: boolean;
  error: string;
}

const Input = ({
  label,
  placeholder = '',
  onChange,
  onBlur,
  value,
  secureTextEntry = false,
  error = '',
}: IInput) => {
  return (
    <View>
      <InputLabel>{label}</InputLabel>
      <InputContainer
        placeholder={placeholder}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      <TextError>{error}</TextError>
    </View>
  );
};

export default Input;
