import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {authenticationScreens} from './ScreenGroups/authenticationScreens';
import {userScreens} from './ScreenGroups/userScreens';
import {navigationRef} from './RootNavigator';
import auth from '@react-native-firebase/auth';

const {Navigator, Screen} = createStackNavigator();

const MainStackNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(loggedUser) {
    setUser(loggedUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator>
        {Object.entries({
          ...(!user ? authenticationScreens : userScreens),
        }).map(([name, component]) => (
          <Screen
            key={name}
            name={name}
            component={component}
            options={{headerShown: false}}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
