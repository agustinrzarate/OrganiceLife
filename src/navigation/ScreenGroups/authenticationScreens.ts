import {ScreenNames} from '../ScreenNames';
import Login from '../../screens/Login';
import Welcome from './../../screens/Welcome';
import SignUp from '../../screens/SignUp';

export const authenticationScreens = {
  [ScreenNames.Welcome]: Welcome,
  [ScreenNames.Login]: Login,
  [ScreenNames.SignUp]: SignUp,
};
