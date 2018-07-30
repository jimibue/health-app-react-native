import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet,FlatList } from 'react-native';


import PracticeListViewItem from '../tracking/daily/PracticeListViewItem';
import { connect } from 'react-redux';





const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  navigate:{
    backgroundColor:"white",
    backgroundColor: '#303e48',
    //backgroundColor: '#e45f56',
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




class InsightsScreen extends Component {

  componentDidMount = () => {
    console.log('insights mounted')
  }

  _keyExtractor = (item, index) => Math.random().toString().replace('.','')

  render() {
    console.log('insight rendered')
     return (
    <View style={styles.container}>
     <View  style={styles.navigate}>
     <Text style={styles.headerText}> INSIGHTS </Text>
      </View> 
          <FlatList
          data={this.props.Ipractices}
          keyExtractor={this._keyExtractor}
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
    const { Ipractices } = state.daily
    return {
        Ipractices,
    }
}
export default connect(mapStateToProps )(InsightsScreen)
//export default DailyTrackerScreen

