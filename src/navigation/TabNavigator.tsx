import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import React from 'react';
import { ScreenNames } from './ScreenNames';
const RootTab = createBottomTabNavigator();

export const TabNavigator = () => (
    <RootTab.Navigator>
        <RootTab.Screen name={ScreenNames.Home} component={Home} options={{ headerShown: false }} />
        <RootTab.Screen name={ScreenNames.Settings} component={Settings} options={{ headerShown: false }} />
    </RootTab.Navigator>
);