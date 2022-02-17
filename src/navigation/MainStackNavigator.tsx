import React, { useMemo, useState } from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './AuthContext';
import { authenticationScreens } from './ScreenGroups/authenticationScreens';
import { userScreens } from './ScreenGroups/userScreens';
import { navigationRef } from './RootNavigator';
import { useAppSelector } from '../redux/app/hooks';


const { Navigator, Screen } = createStackNavigator();

const MainStackNavigator = () => {
  const tokenSelector = useAppSelector(state => state.auth.token);
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



  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer ref={navigationRef}>
        <Navigator>
          {Object.entries({
            ...(!tokenSelector ? authenticationScreens : userScreens)
          }).map(([name, component]) => (
            <Screen
              key={name}
              name={name}
              component={component}
              options={{ headerShown: false }}
            />
          ))}
        </Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default MainStackNavigator;