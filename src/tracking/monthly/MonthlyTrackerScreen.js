import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet,FlatList } from 'react-native';


import PracticeListViewItem from '../daily/PracticeListViewItem';
import { connect } from 'react-redux';





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
  }
})




class MonthlyTrackerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListView:false,
      currentDateIndex:1,
    };
  }

  componentDidMount = () => {
    console.log('mounted')
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
    console.log(this.props.nextPractice)
    const { currentPractice, nextPractice, prevPractice }  = this.props
    return (
    <View style={styles.container}>
     <View  style={styles.navigate}>
     <Text> INSIGHTS </Text>
      </View> 
          <FlatList
          data={this.props.practices}
          renderItem={({item}) => 
          <PracticeListViewItem
              {...item}
            />
            }
          />
      </View>
    );
  }
}

const mapStateToProps = state =>{
    const {currentPractice, practices, formatedData, currentDateIndex, todaysData, prevPractice, nextPractice } = state.daily
    return {
        practices,
        formatedData,
        currentDateIndex,
        todaysData,
        currentPractice,
        prevPractice,
        nextPractice

    }
}
export default connect(mapStateToProps )(MonthlyTrackerScreen)
//export default DailyTrackerScreen
