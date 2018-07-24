import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#fcfcfc',
    }
})

export default class DailyItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        
      <View style={styles.container}>
        <Text> {this.props.item.date}</Text>
        <Text> {this.props.item.type}</Text>

      </View>
    );
  }
}
