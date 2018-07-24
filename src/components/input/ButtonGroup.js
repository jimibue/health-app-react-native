import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
  }
})

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        buttons: [
            {value: 0, isSelected: false},
            {value: 1, isSelected: false},
            {value: 2, isSelected: false},
            {value: 3, isSelected: false},
            {value: 4, isSelected: false},
            {value: 5, isSelected: false},
        ]
    };
  }

  renderButtons = () =>{
      let tempButtons = this.state.buttons.map( function( button ){
          return <Button {...button} />
      })

      return tempButtons
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderButtons() }
      </View>
    );
  }
}
