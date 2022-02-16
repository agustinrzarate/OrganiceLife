import React, { useMemo, useState } from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './AuthContext';
import { authenticationScreens } from './ScreenGroups/authenticationScreens';
import { userScreens } from './ScreenGroups/userScreens';
import { navigationRef } from './RootNavigator';


const { Navigator, Screen } = createStackNavigator();

const MainStackNavigator = () => {
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
            ...(!isLoggedIn ? authenticationScreens : userScreens)
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