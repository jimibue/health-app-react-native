import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

import { scoreChanged,getNextPractice } from '../../tracking/actions/daily'

import { connect } from 'react-redux'

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
  }
})

class ButtonGroup extends Component {
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

  renderButtons = () => {
      const scoreIndex = parseInt(this.props.score)
      let tempButtons = this.state.buttons.map( ( button,i ) => {
        if(scoreIndex == i){
          return <Button key={`button${i}`} value={button.value} isSelected={true}/>
        }
        return <Button key={`button${i}`}  {...button} handlePress={()=>this.handlePress(button.value)}/>
      })

      return tempButtons
  }

  handlePress = (value) =>{
    this.props.handleScoreChange(value)
    this.props.getNextPractice()
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderButtons() }
      </View>
    );
  }
}

const mapStateToProps = state =>{
  return {
    score: state.daily.currentPractice.score
  }
}

// const mapDispatchToProps = dispatch =>{
//   return {
//     onLoadData: () => dispatch(getEvents())
//   }
// }

const mapDispatchToProps = dispatch =>{
  return{
      handleScoreChange: (value) => dispatch(scoreChanged(value)),
      getNextPractice: (value) => dispatch(getNextPractice())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup)
