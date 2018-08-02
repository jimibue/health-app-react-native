import React, { Component } from 'react';
import {  View, Text, Button, Image, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

//should move to shared components
import Number from '../components/ui/Number';

import { withNavigation } from 'react-navigation';
// import GradientWrapper from '../../components/shared/GradientWrapper';

import { connect } from 'react-redux';

import { checkPasscode, setupPasscode, getPasscode } from './actions/auth';

import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';


class Passcode extends Component {


    state = {
        passcode: '',
        ecpc:''
      };

      componentDidMount = () =>{
        this.props.getPasscode()
      }

      numberPressed = (number) => {
          const passcode = this.state.passcode +''+ number
        if(passcode.length == 4 ){
            if(this.props.passcode){
                let ecpc = sha256(passcode)
                let x = Base64.stringify(ecpc)
                if(this.props.passcode == x ) {
                    this.props.navigation.navigate('App')
                } else {
                    this.setState( {passcode: ''})
                }
            }
            else{
                console.log('yo')
                this.props.setupPasscode(passcode)
                this.props.navigation.navigate('App')
            }
        
        }
        else if( passcode.length == 4 ){
            this.setState( {passcode: ''})
        }
        else{
            this.setState( {passcode: passcode})
        }
      }

  render() {
      console.log('passcode render')
      console.log(this.state.passcode )
    let { passcode } = this.state;
    return (
      <View
      style={
          {flex:1,
            padding:20,
            padding:10,
        backgroundColor: 'white',}
      }>
        <Text>{this.props.passcode ? 'please enter 6 digit passcode' : 'Please create a 6 digit passcode'} </Text>
        <Text>{passcode} </Text>
        {/* <InputItem label='setup a passcode to quickly login next time' value={passcode}/> */}
        <View>
            <View style={styles.row}>
                <Number number={'1'} handlePress={this.numberPressed } />
                <Number number={'2'} handlePress={this.numberPressed } />
                <Number number={'3'} handlePress={this.numberPressed } />
             </View>  
             <View style={styles.row}>
                <Number number={'4'} handlePress={this.numberPressed } />
                <Number number={'5'} handlePress={this.numberPressed } />
                <Number number={'6'} handlePress={this.numberPressed } />
             </View>  
             <View style={styles.row}>
                <Number number={'7'} handlePress={this.numberPressed } />
                <Number number={'8'} handlePress={this.numberPressed } />
                <Number number={'9'} handlePress={this.numberPressed } />
             </View>  
             <View style={[styles.row, styles.center]}>
                <Number number={'0'} handlePress={this.numberPressed } />
             </View>  
        </View>
        

      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setupPasscode: ( passcode )=> dispatch(setupPasscode(passcode)),
        checkPasscode: ( passcode )=> dispatch(checkPasscode(passcode)),
        getPasscode: ( passcode )=> dispatch(getPasscode(passcode)),

    }
}

const mapStateToProps = (state) =>{
    return{
        passcode: state.auth.passcode,
        isPasscodeSet: state.auth.isPasscodeSet,
    }
} 

export default connect( mapStateToProps, mapDispatchToProps) (withNavigation(Passcode))


const styles = StyleSheet.create({
    row:{   
        marginRight: 20,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    center: {
        justifyContent:'center'
    },
    buttonContainer: {
        flexDirection: 'row',
    }
})