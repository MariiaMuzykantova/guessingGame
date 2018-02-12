import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      num: '',
      message: 'Guess a number between 1-100',
      correctanswer: Math.floor(Math.random() * 100) + 1,
      counter: 0
    }
  }

  EvaluateAnswer = () => {
    this.setState({ counter: this.state.counter +1});
   if (this.state.num == this.state.correctanswer) {
      Alert.alert('Your guessed the number in ' + this.state.counter + ' guesses');
    }
    else if (this.state.num < this.state.correctanswer) {
      this.setState({ message: 'Your guess ' + this.state.num + ' is too low'});
    }
    else {
        this.setState({ message: 'Your guess ' + this.state.num + ' is too high'});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.message}</Text>
        <TextInput value = {this.state.num}
        style = {{width: 100, borderColor: 'gray', borderWidth: 1}}
        keyboardType = 'phone-pad'
        onChangeText = {(num) => this.setState({num})}
        />
        <Button onPress = {this.EvaluateAnswer} title = "MAKE GUESS" style = {styles.button}  color = '#0066ff'/>
      </View>
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
