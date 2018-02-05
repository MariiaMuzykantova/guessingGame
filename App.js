import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {num: '', text: ''};
    this.state = {answer: Math.floor(Math.random() * 100) + 1}
  }

  buttonPressed = () => {
    const rendom = 
    this.setState({
      result: sum
    });
  }

  

  render() {
    return (
      <View style={styles.container}>
        <Text>Guess a number between 1-100</Text>
        <TextInput value = {this.state.num} 
        style = {{width: 100, borderColor: 'gray', borderWidth: 1}}
        keyboardType = 'phone-pad'
        onChangeText = {(num) => this.setState({num})}/>

        <Button onPress = {this.buttonPressed} title = "MAKE GUESS" style = {styles.button}  color = '#0066ff'/>
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
