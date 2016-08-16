import React, { Component } from 'react';
import { Text, TouchableHighlight, ScrollView, View } from 'react-native';
import hymnData from './hymns.json';
//import Style from './Style';

export default class HymnReaderScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
    }
  }
  render() {
    var hymnNumberData = this.getHymnByNumber(this.props.route.hymn);
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableHighlight style={{margin: 10, padding: 20, borderWidth: 1, borderColor: 'darkgreen'}} underlayColor='darkgreen' onPress={ () => this.props.navigator.pop()}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>BACK</Text>
              </TouchableHighlight>
            </View>
            <View style={{flex: 7}}>
              <Text style={{fontSize: 60, fontWeight: 'bold', textAlign: 'center', margin: 15, color: 'darkgreen'}}>
                {hymnNumberData[0].hymn}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 8, padding: 30, backgroundColor: 'white'}}>
          <ScrollView style={{flex: 1}}>
            <Text style={{textAlign: 'left', color: '#555555', marginBottom: 20, fontSize: 12}}>
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
      views.push(<Text style={{textAlign: 'left', color: '#333333', marginBottom: 10, fontSize: 16}}>{verseNum}. {verseText}</Text>)
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
