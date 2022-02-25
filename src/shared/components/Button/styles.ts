import styled from 'styled-components/native';
import baseTheme from '../../../themes/baseTheme';

export const ButtonContainer = styled.TouchableOpacity`
  width: 260px;
  height: 68px;
  background: #f3f1f5;
  border-radius: 40px;
  padding: 0 25px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-family: ${baseTheme.typography.fonts.primary};
  color: #000;
  margin-left: 12px;
`;
