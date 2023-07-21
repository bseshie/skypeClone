import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StatusBar,View } from 'react-native';
import ContactScreen from '.screens\ContactScreen.js';
import ContactDetails from 'screens\ContactDetails.js';
import { View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <ScreenNavigator /> 
    );
  }
}

const ScreenNavigator = StackNavigator({
  Home: { screen: ContactScreen },
  Details: { screen: ContactDetails },
})

