import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text
} from 'react-native';

import Style from './Style';

export default class InputButton extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.inputButton}
                          underlayColor="#193441"
                          onPress={this.props.onPress}>
        <Text style={styles.inputButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    )
  }
}
