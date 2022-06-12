import styled from 'styled-components/native';
import baseTheme from '../../../themes/baseTheme';
import CloseSvg from './../../../assets/icons/CloseSvg';

export const BackgroundModal = styled.View`
  flex: 1;
  background: #122635d9;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  background: #fff;
  width: 312px;
  min-height: 180px;
  height: auto;
  border-radius: 30px;
  padding: 15px 15px 20px;
`;

export const Close = styled(CloseSvg)`
  align-self: flex-end;
`;

export const TitleModal = styled.Text`
  font-family: ${baseTheme.typography.fonts.primaryMedium};
  font-size: 14px;
  text-align: center;
  width: 220px;
  align-self: center;
  color: #6b6b6b;
`;

export const Button = styled.TouchableOpacity`
  width: 160px;
  height: 40px;
  border-radius: 30px;
  background-color: #6998ab;
  padding: 9px;
`;

export const TextButton = styled.Text`
  font-family: ${baseTheme.typography.fonts.primaryBold};
  color: #ffff;
  text-align: center;
  text-transform: uppercase;
`;

export const ModalBody = styled.View`
  justify-content: space-between;
`;

export const disabled = (isValid: boolean) => {
  if (!isValid) {
    return {opacity: 0.3};
  }
  return {opacity: 1};
};
