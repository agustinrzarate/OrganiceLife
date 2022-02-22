import styled from 'styled-components/native';
import baseTheme from '../../themes/baseTheme';
export const ContainerSignIn = styled.View`
  margin-top: 40px;
  top: 0;
  bottom: 0;
  width: 382px;
  height: 620px;
  background: rgba(255, 255, 255, 0.97);
  align-self: center;
  padding: 43px 21px 0;
`;
export const Title = styled.Text`
  max-width: 300px;
  font-size: 36px;
  color: #d3dedc;
  margin-top: 80px;
  letter-spacing: 3px;
  text-align: center;
  font-family: ${baseTheme.typography.fonts.primaryExtraLight};
  align-self: center;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 260px;
  height: 50px;
  background: #1a374d;
  border-radius: 30px;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-family: ${baseTheme.typography.fonts.primaryMedium};
  text-align: center;
  font-size: 18px;
  letter-spacing: 7px;
  color: #ffff;
`;

export const InputText = styled.Text`
  font-family: ${baseTheme.typography.fonts.primary};
  font-size: 14px;
  color: #6b6b6b;
  margin: 0 0 5px 15px;
`;

export const InputSignIn = styled.TextInput`
  width: 340px;
  height: 50px;
  background: rgba(211, 222, 220, 0.7);
  border-radius: 20px;
  padding: 0 15px;
`;

export const Divisor = styled.View`
  margin: 25px 0;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.View`
  width: 340px;
  height: 1px;
  background: #d3dedc;
`;

export const TextOption = styled.Text`
  color: #d3dedc;
  text-align: center;
  font-family: ${baseTheme.typography.fonts.primaryMedium};
  font-size: 14px;
  width: 68px;
  position: absolute;
  background: #ffff;
`;

export const GoogleSignInButton = styled.TouchableOpacity`
  flex-direction: row;
  min-width: 260px;
  height: 50px;
  border-radius: 30px;
  border: 1px;
  border-color: #6b6b6b;
  align-self: center;
  padding: 4px 18px;
  align-items: center;
  justify-content: space-between;
`;

export const TextButtonGoogle = styled.Text`
  font-family: ${baseTheme.typography.fonts.primaryBold};
  font-size: 18px;
  color: #6b6b6b;
  letter-spacing: 2px;
`;

export const TextError = styled.Text`
  font-family: ${baseTheme.typography.fonts.primary};
  font-size: 14px;
  color: #dd4a48;
  text-align: right;
  min-height: 22px;
  margin-right: 15px;
`;
