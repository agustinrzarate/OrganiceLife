import styled from 'styled-components/native';
import baseTheme from '../../themes/baseTheme';

export const ButtonLogOut = styled.TouchableOpacity`
  width: 110px;
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-right: 10px;
  justify-content: flex-end;
`;

export const LogOut = styled.Text`
  font-size: 14px;
  font-family: ${baseTheme.typography.fonts.primary};
  color: #ffff;
  margin-right: 5px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Greeting = styled.Text`
  font-family: ${baseTheme.typography.fonts.primary};
  font-size: 24px;
  color: #1a374d;
  width: 120px;
  margin-left: 15px;
`;

export const Date = styled.Text`
  font-size: 14px;
  background: #ffff;
  color: #1a374d;
  margin-top: 40px;
  width: 90px;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  padding: 3px;
`;

export const ContainerButtons = styled.View`
  flex: 0.85;
  justify-content: center;
  padding-left: 20px;
`;
