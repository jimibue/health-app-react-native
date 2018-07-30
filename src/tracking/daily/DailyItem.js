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
    },
    title:{
        fontSize: 40,
        fontWeight: '700',
        padding: 40,
    }
})

class DailyItem extends Component {

  render() {
    const { practice, navigateNextItem, navigatePrevItem,nextItem, prevItem  } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {practice.title}</Text>
        <ButtonGroup selectedScore={practice.score} />
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

export default DailyItem