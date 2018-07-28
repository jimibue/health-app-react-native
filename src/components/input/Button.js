import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonConatiner:{
        padding:15,
        margin: 5,
       
        borderWidth:2,
        borderRadius: 5,
        borderColor: 'grey',
    },
    button:{
        color:'grey',
        fontSize: 22,
    },
    active:{
        borderColor: 'red',
    },
    activeText:{
        color:'red'

    }
    
})

const Button = ({
    value,
    handlePress,
    isSelected
}) => (
    <TouchableOpacity 
        onPress={handlePress} 
        style={[ styles.buttonConatiner, isSelected ? styles.active:'']}>
        <Text style={[ styles.button, isSelected ? styles.activeText:'']}>{ value }</Text>
    </TouchableOpacity>
);

export default Button;
