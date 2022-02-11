import React, {useMemo, useState} from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  NavigatorScreenParams,
  Route,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import {AuthContext} from './AuthContext';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Settings from '../screens/Settings';

type RootStackParamList = {
  Login: undefined;
  RootTab: NavigatorScreenParams<RootTabParamList>;
};

type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
};

const getTabHeaderTitle = (
  route: Route<'RootTab', NavigatorScreenParams<RootTabParamList>>,
) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Settings':
      return 'Settings';
    case 'Edit':
      return 'Edit';
    default:
      return 'Home';
  }
};

const MainStackNavigator = () => {
  const RootStack = createStackNavigator<RootStackParamList>();
  const RootTab = createBottomTabNavigator<RootTabParamList>();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const authContext = useMemo(
    () => ({
      signIn: () => {
        setIsLoggedIn(true);
      },
      signOut: () => {
        setIsLoggedIn(false);
      },
    }),
    [],
  );

  const RootTabScreens = () => (
    <RootTab.Navigator>
      <RootTab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <RootTab.Screen name="Settings" component={Settings}  options={{headerShown: false}}/>
    </RootTab.Navigator>
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStack.Navigator>
          {isLoggedIn ? (
            <RootStack.Screen
              name="RootTab"
              component={RootTabScreens}
              options={{headerShown: false}}
            />
          ) : (
            <RootStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default MainStackNavigator;