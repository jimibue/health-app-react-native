import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

import RootNavigator from './src/RootNavigator';

console.disableYellowBox = true

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <RootNavigator />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
