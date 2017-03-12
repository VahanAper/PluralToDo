import Expo from 'expo';
import React, { Component } from 'react';
import {
  // Platform,
  // StatusBar,
  // StyleSheet,
  // View,
  Navigator
} from 'react-native';
// import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
// import { FontAwesome } from '@expo/vector-icons';

// import Router from './navigation/Router';
// import cacheAssetsAsync from './utilities/cacheAssetsAsync';
// import expoWordmark from './assets/images/expo-wordmark.png';
// import spaceMonoRegular from './assets/fonts/SpaceMono-Regular.ttf';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

class PluralToDo extends Component {
  state = {
    appIsReady: false,
    todos: [
      {
        task: 'Learn React Native',
      },
      {
        task: 'Learn Redux',
      }
    ],
  };

  onAddStarted() {
    this.navigator.push({
      name: 'taskForm'
    });
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case 'taskForm':
        console.log(navigator);
        return (
          <TaskForm />
        );

      default:
        return (
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos}
          />
        );
    }
  }

  render() {
    // if (this.state.appIsReady) {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'taskList', index: 0 }}
        renderScene={this.renderScene.bind(this)}
        ref={(navigator) => {
          this.navigator = navigator;
        }}
      />
    );
      // return (
      //   <View style={styles.container}>
      //     <NavigationProvider router={Router}>
      //       <StackNavigation
      //         id="root"
      //         initialRoute={Router.getRoute('rootNavigation')}
      //       />
      //     </NavigationProvider>
      //
      //     {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      //     {Platform.OS === 'android' &&
      //       <View style={styles.statusBarUnderlay} />}
      //   </View>
      // );
    // }

    // return <Expo.Components.AppLoading />;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   statusBarUnderlay: {
//     height: 24,
//     backgroundColor: 'rgba(0,0,0,0.2)',
//   },
// });

Expo.registerRootComponent(PluralToDo);
