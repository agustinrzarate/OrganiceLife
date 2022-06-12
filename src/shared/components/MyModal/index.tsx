import React, {useState} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {
  ModalContainer,
  BackgroundModal,
  Close,
  TitleModal,
  Button,
  TextButton,
  ModalBody,
  disabled,
} from './styles';
import {Shadow} from 'react-native-shadow-2';

interface IModal {
  title: string;
  sumbitText: string;
  children: JSX.Element[] | JSX.Element;
  onSumbit: () => void;
  isValid?: boolean;
}

const MyModal = ({
  title,
  sumbitText,
  children,
  onSumbit,
  isValid = true,
}: IModal) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handlePress = () => {
    if (isValid) {
      onSumbit();
      setIsVisible(!isVisible);
    }
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(!isVisible);
      }}>
      <BackgroundModal>
        <ModalContainer>
          <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <Close />
          </TouchableOpacity>
          <ModalBody>
            <TitleModal>{title}</TitleModal>
            <View>{children}</View>
            <Shadow
              radius={30}
              distance={4}
              startColor="#1c4c5f29"
              offset={[1, 2]}
              containerViewStyle={{
                alignSelf: 'center',
                justifySelf: 'flex-end',
              }}
              viewStyle={{alignSelf: 'center'}}>
              <Button
                onPress={handlePress}
                disabled={!isValid}
                style={disabled(isValid)}>
                <TextButton>{sumbitText}</TextButton>
              </Button>
            </Shadow>
          </ModalBody>
        </ModalContainer>
      </BackgroundModal>
    </Modal>
  );
};

export default MyModal;
