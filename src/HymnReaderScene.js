import React, { Component } from 'react';
import { Text, TouchableHighlight, ScrollView, View } from 'react-native';
import hymnData from './src/hymns.json';
import Style from './Style';

export default class HymnRenderScene extends Component {
  constructor(props) {
    super(props);
    this.state {
      id: 1,
    }
  }
  render() {
    var hymnNumberData = this.getHymnByNumber(this.props.route.hymn);
    return (
      <View style={styles.container}>
        <View style={styles.topsies}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableHighlight style={{margin: 10, padding: 20, borderWidth: 1, borderColor: 'darkgreen'}} underlayColor='darkgreen' onPress={ () => this.props.navigator.pop()}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>BACK</Text>
              </TouchableHighlight>
            </View>
            <View style={{flex: 7}}>
              <Text style={styles.hymnNum}>
                {hymnNumberData[0].hymn}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bodies}>
          <ScrollView style={{flex: 1}}>
            <Text style={styles.section}>
              {hymnNumberData[0].section}
            </Text>
            {this.renderHymnVerses()}
          </ScrollView>
        </View>
      </View>
    );
  }
  renderHymnVerses() {
    let views = [];
    var hymnNumberData = this.getHymnByNumber(this.props.route.hymn);
    for (var r = 0; r < hymnNumberData[0].verses.length; r ++) {
      let verseNum = hymnNumberData[0].verses[r].verse;
      let verseText = hymnNumberData[0].verses[r].text;
      views.push(<Text style={styles.verses}>{verseNum}. {verseText}</Text>)
    }
    return views;
  }
  getHymnByNumber(num) {
    let viewsHymn = [];
    viewsHymn = hymnData.filter(
      function(hymnData){return hymnData.hymn == num}
    );
    return viewsHymn;
  }
}
