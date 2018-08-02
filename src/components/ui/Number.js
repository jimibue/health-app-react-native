import React from 'react';
import {  View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container:{
        height:80,
        width:80,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor:'black',
        // borderWidth: 1,
        //backgroundColor:'#fcfcfc',
    },
    number:{
        fontWeight:'600',
        fontSize: 36,
        color:'black',
        fontWeight:'600',
 

    }
})
//import Icon from 'react-native-vector-icons/FontAwesome';

const Number = (props) => {
    return (
    <TouchableOpacity onPress={ () => props.handlePress(props.number) }>
      <View style={styles.container}>
        <Text style={styles.number}>{props.number}</Text>
      </View>
    </TouchableOpacity>
    );
  }

  export default Number