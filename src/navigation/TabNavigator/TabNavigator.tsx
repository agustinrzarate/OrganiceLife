import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Today from '../../screens/Today';
import React from 'react';
import {ScreenNames} from '../ScreenNames';

/* import VectorImage from 'react-native-vector-image'; */
import HomeSvg from './../../assets/icons/HomeSvg';
import CalendarSvg from '../../assets/icons/CalendarSvg';

export const RootTab = createBottomTabNavigator();

export const TabNavigator = () => (
  <RootTab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color}) => {
        if (route.name === ScreenNames.Home) {
          return <HomeSvg color={color} />;
        } else if (route.name === ScreenNames.Today) {
          return <CalendarSvg color={color} />;
        }
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        height: 55,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        position: 'absolute',
      },
    })}>
    <RootTab.Screen
      name={ScreenNames.Home}
      component={Home}
      options={{headerShown: false}}
    />
    <RootTab.Screen
      name={ScreenNames.Today}
      component={Today}
      options={{headerShown: false}}
    />
  </RootTab.Navigator>
);
