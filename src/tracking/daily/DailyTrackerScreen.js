import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet,FlatList } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  navigate:{
    backgroundColor:"white",
    flexDirection: 'row',
    justifyContent:'center',
     alignContent: 'center',
     alignItems: 'center',

    padding: 30,
   
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

import DailyItem from './DailyItem';

export default class DailyTrackerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListView:false,
      currentDateIndex:1,
      data:[
      {
        currentItemIndex:0,
        date:'June 1',
        dummyData: [
          { key:1, id:1, score:4, type:'cardio'},
          { key:2, id:2, score:3, type:'strength training'},
          { key:3, id:3, score:2, type:'flexibilty training'},
        ]
      },
      {
        currentItemIndex:0,
        date:'June 2',
        dummyData: [
          { key:1, id:1, score:0, type:'cardio'},
          { key:2, id:2, score:4, type:'strength training'},
          { key:3, id:3, score:5, type:'flexibilty training'},
        ]
      },
      {
        currentItemIndex:0,
        date:'June 3',
        dummyData: [
          { key:1, id:1, score:1, type:'cardio'},
          { key:2, id:2, score:2, type:'strength training'},
          { key:3, id:3, score:0, type:'flexibilty training'},
        ]
      }
      
    ]
    };
  }
  rendorBody = () =>{
    if(!this.state.isListView){
      return <DailyItem item={currentDateItem}/>
    }else{
      return <Text>yo</Text>
    }
  }

  getNextItem = () =>{
    return 'next'
  }
  getPrevItem = () =>{
    return 'previous'
  }

  render() {
    let { data, currentDateIndex,isListView } = this.state
    let currentDate = data[currentDateIndex]
    let currentDateItemData = currentDate.dummyData
    let currentDateItem = currentDateItemData[currentDate.currentItemIndex]
    return (
      <View style={styles.container}>
              <View  style={styles.navigate}>
          <Text>icon</Text>
          <View  style={styles.navigateContainer}>
             <TouchableOpacity onPress={ ()=> {this.setState({ currentDateIndex: --currentDateIndex }) }}>
            { currentDateIndex != 0 && <Text style={[styles.navigateText,styles.width]}> {'<'} </Text>}
            { currentDateIndex == 0 && <Text style={[styles.navigateText,styles.width]}> {' '} </Text>}
            </TouchableOpacity>
            <Text style={styles.navigateText}> {currentDate.date}</Text>
            <TouchableOpacity onPress={ ()=> {this.setState({ currentDateIndex: ++currentDateIndex }) }}>
            { currentDateIndex != data.length-1 && <Text style={[styles.navigateText,styles.width]}> > </Text>}
            { currentDateIndex  == data.length-1 && <Text style={[styles.navigateText,styles.width]}> {' '} </Text>}
            </TouchableOpacity>
            </View>
            <Text onPress={() => {this.setState( {isListView: !isListView} )}}>icon</Text>
        </View>

        {  !isListView && 
          <DailyItem 
            item={currentDateItem} 
            nextItem={this.getNextItem()}
            prevItem={this.getPrevItem()}
            navigatePrevItem={this.navigatePrevItem}
            navigatePrevItem={this.navigateNextItem}
            /> }
        {  isListView && 
          <FlatList
          data={currentDateItemData}
          renderItem={({item}) => 
          <View style={styles.list}>
            <Text>{item.type}</Text>
            <Text>{item.score}</Text>
            </View>  
            }
          />
        }
        

        

      </View>
    );
  }
}
