import React from 'react';
import Statistics from '../../../assets/icons/StatisticsSvg';
import {IconButtonsTypes} from '../../../utils/types/iconButtonTypes';
import {ButtonContainer, Text} from './styles';
import CalendarSvg from './../../../assets/icons/CalendarSvg';
import BookSvg from '../../../assets/icons/BookSvg';
import CreateSvg from '../../../assets/icons/CreateSvg';

interface IButton {
  title: string;
  type: StateType;
}

export declare type StateType = keyof typeof IconButtonsTypes;

const Button = ({title, type}: IButton) => {
  const handleIcon = () => {
    switch (type) {
      case IconButtonsTypes.STATISTICS:
        return <Statistics />;
      case IconButtonsTypes.CALENDAR:
        return <CalendarSvg />;
      case IconButtonsTypes.WORK_TIME:
        return <BookSvg />;
      case IconButtonsTypes.CREATE:
        return <CreateSvg />;
      default:
        break;
    }
  };
  return (
    <ButtonContainer>
      {handleIcon()}
      <Text>{title}</Text>
    </ButtonContainer>
  );
};

export default Button;
