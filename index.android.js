import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './app/main';

export default class TheQuoteRepo extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('TheQuoteRepo', () => TheQuoteRepo);
