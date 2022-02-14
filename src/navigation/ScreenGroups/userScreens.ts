import Edit from '../../screens/Edit';
import Home from '../../screens/Home';
import Settings from './../../screens/Settings';
import { ScreenNames } from '../ScreenNames';
import { TabNavigator } from '../TabNavigator';

export const userScreens = {
    [ScreenNames.TabNavigator]: TabNavigator,
    [ScreenNames.Home]: Home,
    [ScreenNames.Edit]: Edit,
    [ScreenNames.Settings]: Settings, 
}