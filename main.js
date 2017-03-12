import Expo from 'expo';
import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Router from './navigation/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';
import expoWordmark from './assets/images/expo-wordmark.png';
import spaceMonoRegular from './assets/fonts/SpaceMono-Regular.ttf';

class PluralToDo extends Component {
  state = {
    appIsReady: false,
    todos: [
      {
        task: 'Learn React Native',
      }
    ],
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [expoWordmark],
        fonts: [
          FontAwesome.font,
          { 'space-mono': spaceMonoRegular },
        ],
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation
              id="root"
              initialRoute={Router.getRoute('rootNavigation')}
            />
          </NavigationProvider>

          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
        </View>
      );
    }

    return <Expo.Components.AppLoading />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

Expo.registerRootComponent(PluralToDo);
