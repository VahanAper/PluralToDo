import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class TaskForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      task: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid={'transparent'}
          style={styles.input}
        />
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
    backgroundColor: '#F7F7F7'
  },
  input: {
    borderWidth: 1,
    borderColor: '#D7D7D7',
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
    borderRadius: 3
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FAFAFA'
  },
  button: {
    height: 60,
    alignSelf: 'stretch',
    backgroundColor: '#05A5D1',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelButton: {
    backgroundColor: '#666666'
  }
});

export default TaskForm;
