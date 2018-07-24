import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import ButtonGroup from '../../components/input/ButtonGroup';

const styles=StyleSheet.create({
    container:{
        flex: 1,
        flexGrow: 1,
        justifyContent:'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
    },
    bottomNav:{
        width:300,
        flexDirection: 'row',   
        justifyContent:'space-between', 
   
    },
    link:{
        color:'#999'
    }
})

export default class DailyItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nextItem:props.nextItem,
        prevItem:props.prevItem,
    };
  }

  render() {
    const  { nextItem, prevItem, navigatePrevItem, navigateNextItem } = this.state
    return (
      <View style={styles.container}>
        <Text> {this.props.item.type}</Text>
        <ButtonGroup />
        <View style={styles.bottomNav}>
            <TouchableOpacity onPress={navigatePrevItem}>
                <Text style={styles.link}>{prevItem}</Text>
                </TouchableOpacity>
            <TouchableOpacity  onPress={navigateNextItem}>
                <Text style={styles.link}>{nextItem}</Text>
            </TouchableOpacity>
        </View>
        {/* <Text> {this.props.item.score}</Text> */}
      </View>
    );
  }
}
