import styled from 'styled-components/native';
import baseTheme from '../../themes/baseTheme';
export const ContainerLogin = styled.View`
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
    font-size: 36px;
    color: #D3DEDC;
    margin-top: 80px;
    letter-spacing: 3px;
    text-align: center;
    font-family: ${baseTheme.typography.fonts.primaryExtraLight};
`;

export const LoginButton = styled.TouchableOpacity`
  width: 260px;
  height: 50px;
  background: #6998AB;
  border-radius: 30px;
  justify-content: center;
`;

export const TextButton = styled.Text`
    font-family: ${baseTheme.typography.fonts.primaryMedium};
    text-align: center;
    font-size: 18px;
    letter-spacing: 7px;
    color: #FFFF;
`;

export const InputText = styled.Text`
    font-family: ${baseTheme.typography.fonts.primary};
    font-size: 14px;
    color: #6B6B6B;
    margin: 0 0 5px 15px;
`; 

export const InputLogin = styled.TextInput`
    width: 340px;
    height: 50px;
    background: rgba(211, 222, 220, 0.7);
    border-radius: 20px;
    padding: 0 15px;
    margin-bottom: 15px;
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
    background: #D3DEDC;
`;

export const TextOption = styled.Text`
    color: #D3DEDC;
    text-align: center;
    font-family: ${baseTheme.typography.fonts.primaryMedium};
    font-size: 14px;
    width: 68px;
    position: absolute;
    background: #FFFF;
`;

export const GoogleLoginButton = styled.TouchableOpacity`
    flex-direction: row; 
    width: 260px;
    height: 50px;
    border-radius: 30px;
    border: 1px;
    border-color: #6B6B6B;
    align-self: center;
    padding: 4px 18px;
    align-items: center;
    justify-content: space-between;
`;

export const TextButtonGoogle = styled.Text`
    font-family: ${baseTheme.typography.fonts.primaryBold};
    font-size: 18px;
    color: #6B6B6B;
    letter-spacing: 2px;
`;