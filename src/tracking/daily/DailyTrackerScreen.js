import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet,FlatList } from 'react-native';

import DailyItem from './DailyItem';
import PracticeListViewItem from './PracticeListViewItem';
import { connect } from 'react-redux';

import { getNextPractice } from '../actions/daily';
import { getPrevPractice } from '../actions/daily';




const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  navigate:{
    backgroundColor:"white",
    backgroundColor: '#303e48',
    backgroundColor: '#e45f56',
    flexDirection: 'row',
    justifyContent:'center',
     alignContent: 'center',
     alignItems: 'center',

    padding: 15,
   
  },
  navigateContainer:{
    width:280,
    flexDirection: 'row',
    justifyContent:'center',
    alignContent: 'center',
  
  },
  navigateText:{
    color:'#444',
    paddingRight: 10,
    fontSize:24
   
  },
  width:{
    width:50,
    // backgroundColor:"red",
  },
  list:{
    flexDirection: 'row',
    justifyContent:'center',
    alignContent: 'center',
  },
  headerText:{
    color:'white',
    fontSize:24,
    fontWeight: '600',
  }
})




class DailyTrackerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListView:false,
      currentDateIndex:1,
    };
  }

  componentDidMount = () => {
    console.log('Trakcing mounted')
  }

  
  rendorBody = () =>{
    if(!this.state.isListView){
      return <DailyItem item={currentDateItem}/>
    }else{
      return <Text>yo</Text>
    }
  }

  getNextItem = () =>{
    this.props.loadNextPractice()
  }
  getPrevItem = () =>{
    this.props.loadPrevPractice()
  }
  getNextText = () => {
    return this.props.nextPractice.title == 'none' ?  '' : this.props.nextPractice.title 
  }

  render() {
    console.log('DAily rendered')
    const { currentPractice, nextPractice, prevPractice }  = this.props
    return (
    <View style={styles.container}>
     <View  style={styles.navigate}>
     <Text style={styles.headerText}> TRACKING </Text>
      </View> 

     <DailyItem 
          practice={currentPractice} 
            nextItem={this.getNextText()}
            prevItem={prevPractice.title == 'none' ?  '' : prevPractice.title }
            navigatePrevItem={this.getPrevItem}
            navigateNextItem={this.getNextItem}
            />
      </View>
    );
  }
}
mapDispatchToProp = dispatch => {
  return{
    loadNextPractice: () =>dispatch(getNextPractice()),
    loadPrevPractice: () =>dispatch(getPrevPractice())
  }
}
const mapStateToProps = state =>{
    const {currentPractice, formatedData, currentDateIndex, todaysData, prevPractice, nextPractice } = state.daily
    return {
        formatedData,
        currentDateIndex,
        todaysData,
        currentPractice,
        prevPractice,
        nextPractice

    }
}
export default connect(mapStateToProps, mapDispatchToProp )(DailyTrackerScreen)
//export default DailyTrackerScreen
