import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class TaskList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TASK LIST</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40
  }
});

export default TaskList;
