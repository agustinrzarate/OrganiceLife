import styled from 'styled-components/native';
import baseTheme from '../../themes/baseTheme';

export const ImageBackground = styled.ImageBackground`
  flex: 3;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 60px;
  color: #d3dedc;
  margin-top: 160px;
  letter-spacing: 6px;
  text-align: center;
  font-family: ${baseTheme.typography.fonts.primary};
`;
export const Subtitle = styled.Text`
  font-size: 18px;
  color: #d3dedc;
  letter-spacing: 7px;
  text-align: center;
  font-family: ${baseTheme.typography.fonts.primary};
`;
export const ButtonContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
export const LoginButton = styled.TouchableOpacity`
  width: 260px;
  height: 57px;
  background: #6998ab;
  border-radius: 30px;
  justify-content: center;
`;
export const TextButton = styled.Text`
  font-family: ${baseTheme.typography.fonts.primary};
  text-align: center;
  font-size: 18px;
  letter-spacing: 7px;
  color: #ffff;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 260px;
  height: 57px;
  background: #1a374d;
  border-radius: 30px;
  justify-content: center;
`;
