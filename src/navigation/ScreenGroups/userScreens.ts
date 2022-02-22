import Edit from '../../screens/Edit';
import Home from '../../screens/Home';
import Today from './../../screens/Today';
import {ScreenNames} from '../ScreenNames';
import {TabNavigator} from '../TabNavigator/TabNavigator';

export const userScreens = {
  [ScreenNames.TabNavigator]: TabNavigator,
  [ScreenNames.Home]: Home,
  [ScreenNames.Edit]: Edit,
  [ScreenNames.Today]: Today,
};
