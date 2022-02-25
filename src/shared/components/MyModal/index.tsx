import React, {useState} from 'react';
import {Modal} from 'react-native';
import {ModalContainer} from './styles';

const MyModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(!isVisible);
      }}>
      <ModalContainer />
    </Modal>
  );
};

export default MyModal;
