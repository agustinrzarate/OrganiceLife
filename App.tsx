/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import {store} from './src/redux/app/store';
const App = () => {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
};
export default App;
