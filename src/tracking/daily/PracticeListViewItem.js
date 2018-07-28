import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BasicBar from '../../charts/BasicBar';
import BasicLine from '../../charts/BasicLine';

const styles = StyleSheet.create({
    conatiner:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        margin: 5,
        backgroundColor: 'rgba(240,241,256, 0.5)'
    },
    title :{
        fontSize: 24,
        fontWeight: '600',
    },
    unanswered:{
       // backgroundColor: 'rgba(222, 0, 0, 0.1)'
    },
    answered:{
       // backgroundColor:  'rgba(0,222, 0, 0.1)'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default class PracticeListViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  isAnswered = (data) =>{
      return data.charAt(data.length-1) == 'X' ? 'unanswered': 'answered'
  }

  render() {
    return (
      <View style={[styles.conatiner, styles[this.isAnswered(this.props.data)]]}>
        <View style={styles.row}>
            <Text  style={styles.title}> {this.props.title}</Text>
            <Text> {this.props.descpition}</Text>
            <BasicBar  barColor={'#dddddd'}/>
        </View>
        <View style={styles.row}>
             <BasicLine />
            <BasicBar  barColor={'#e45f56'}/>
        </View>

      </View>
    );
  }
}
