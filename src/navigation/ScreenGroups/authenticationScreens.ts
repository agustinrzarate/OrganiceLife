import { ScreenNames } from '../ScreenNames';
import Login from '../../screens/Login';
import Welcome from './../../screens/Welcome';

export const authenticationScreens = {
  [ScreenNames.Welcome]: Welcome,
  [ScreenNames.Login]: Login,
};
