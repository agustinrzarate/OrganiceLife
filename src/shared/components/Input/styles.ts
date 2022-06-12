import styled from 'styled-components/native';
import baseTheme from '../../../themes/baseTheme';

export const InputLabel = styled.Text`
  font-family: ${baseTheme.typography.fonts.primary};
  font-size: 14px;
  color: #6b6b6b;
  margin-left: 15px;
`;

export const InputContainer = styled.TextInput`
  height: 50px;
  background: rgba(211, 222, 220, 0.7);
  border-radius: 20px;
  padding: 0 15px;
`;

export const TextError = styled.Text`
  font-family: ${baseTheme.typography.fonts.primary};
  font-size: 14px;
  color: #dd4a48;
  text-align: right;
  min-height: 22px;
  margin-right: 15px;
`;
