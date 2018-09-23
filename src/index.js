import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import Todo from 'components/Todo';

export default class App extends Component {
  
  state = {
    todos: [
      { id: 0, text: 'Read a Arthicle' },
      { id: 1, text: 'Study React Native' },
    ]
  }

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), text: 'New To do' },
      ]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Todo title={'Do Coffee'}/>
        <Todo title={'Study React Native'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box : {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [
      { rotateZ: '20deg' }, 
    ]
  },

  boxText: {
    color: '#FFF',
  },
});
