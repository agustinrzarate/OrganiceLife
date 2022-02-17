import React, { useEffect, useMemo, useState } from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './AuthContext';
import { authenticationScreens } from './ScreenGroups/authenticationScreens';
import { userScreens } from './ScreenGroups/userScreens';
import { navigationRef } from './RootNavigator';
import { useAppSelector } from '../redux/app/hooks';
import auth from '@react-native-firebase/auth';


const { Navigator, Screen } = createStackNavigator();

const MainStackNavigator = () => {
  const tokenSelector = useAppSelector(state => state.auth.response);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator>
        {Object.entries({
          ...(!user ? authenticationScreens : userScreens)
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
  );
};

export default MainStackNavigator;