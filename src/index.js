import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  
  state = {
    ususario: 'Diego',
    todos: [
      { id: 0, text: 'Read a Arthicle'},
      { id: 1, text: 'Study React Native'},
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
        <Text>{ this.state.usuario }</Text>
        { this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        )) }
        <Button title="Add new To do" onPress={this.addTodo}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
