import React from 'react';
import Main from './views/Main';
import { StackNavigator } from 'react-navigation';

const SimpleApp = StackNavigator({
  Main: { screen: Main }
});

export default SimpleApp;
