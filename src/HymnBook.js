// Main Scence that sets up the Navigation aspect of the app. It allows us to switch between scenes.
import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import NumberInputScene from './NumberInputScene';
import HymnReaderScene from './HymnReaderScene';

class HymnBook extends Component {
  constructor(props) {
    super(props);
  }
  navScene(route, navigator) {
    switch (route.id) {
      case 0:
        return(<NumberInputScene navigator={navigator} route={route} title='Home' />);
      case 1:
        return (<HymnReaderScene navigator={navigator} route={route} title='Hymn' />);
    }
  }
  render() {
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute={{id: 0}}
        renderScene={this.navScene}
      />
    );
  }

}
AppRegistry.registerComponent('HymnBook', () => HymnBook);
