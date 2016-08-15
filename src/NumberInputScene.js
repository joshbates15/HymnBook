import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import Style from './Style';
import InputButton from './InputButton';

//Define the input buttons that will display.
const inputButtons = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['<< CLEAR', 'ENTER >>']
];

export default class NumberInputScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      inputValue: 0,
      selectedSymbol: null,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={styles.numberContainer}>
          {this.createInputButtons()}
        </View>
      </View>
    );
  }
  createInputButtons() {
    let views = [];

    for (var r = 0; r < inputButtons.length; r ++) {
      let row = inputButtons[r];

      let inputRow = [];
      for (var i = 0; i < row.length; i ++) {
        let input = row[i];

        inputRow.push(
          <InputButton value={input}
                       onPress={this.pressedInputButton.bind(this, input)}/>
        );
      }
      views.push(<View style={styles.inputRow}>{inputRow}</View>)
    }
    return views;
  }

  pressedInputButton(input) {
    switch (typeof input) {
      case 'number':
        return this.setNumberInput(input)
      case 'string':
        return this.setStringInput(input)
    }
  }

  setNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num;

    this.setState({
      inputValue: inputValue
    })
  }

  setStringInput(str) {
    switch (str) {
      case '<< CLEAR':
        this.setState({inputValue: 0,selectedSymbol: null});
        break;
      case 'ENTER >>':
        //alert(this.state.inputValue);
        this.setState({selectedSymbol: null});
        // Need to figure out the best way to do this. It get's inputted through the InputButton that is pushed.
        // The hymn value should be grabbed with this.props.route.hymn in the Hymn Scene.
        return () => this.props.navigator.push({id: 1, hymn: this.state.inputValue});
        break;
    }
  }
}
