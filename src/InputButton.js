import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text
} from 'react-native';

//import myStyle from './Style';

export default class InputButton extends Component {
  render() {
    return (
      <TouchableHighlight style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderColor: '#91AA9D'}}
                          underlayColor="#193441"
                          onPress={this.props.onPress}>
        <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>{this.props.value}</Text>
      </TouchableHighlight>
    )
  }
}
