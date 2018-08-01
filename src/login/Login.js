import React, { Component } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';

import { authSignup, signIn } from '../login/actions/auth';

import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:'',
        authMode:'Sign In'
    };
  }
  loginPressed  = () =>{
    console.log('here')
    //this.props.navigation.navigate('App')
    this.props.authSignup({
        email: this.state.email,
        password:this.state.password,
        authMode: this.state.authMode
    })


}   
signInPressed  = () =>{
    console.log('here')
    //this.props.navigation.navigate('App')
    this.props.signIn({
        email: this.state.email,
        password:this.state.password,
        authMode: this.state.authMode
    })


}   

  render() {
     const {email, password} = this.state
     //not the way to do this
     if (this.props.isAuthed){ this.props.navigation.navigate('App')}
     

    return (
      <View>
        <Text> Login </Text>
        <Text> Email</Text>
        <TextInput 
            value={email}
            onChangeText={ (email) => this.setState({ email }) }/>
        <Text> Password </Text>
        <TextInput
          value={password}
         onChangeText={ (password) => this.setState({ password }) }/>

           { this.state.isLoading  &&  <ActivityIndicator/> }
       { !this.state.isLoading  && <Button onPress={() =>this.loginPressed()} title={'Sign Up'}/> }
       { !this.state.isLoading  && <Button onPress={() =>this.signInPressed()} title={'Sign In'}/> }
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        authSignup: (authData, authMode)=> dispatch(authSignup(authData, authMode)),
        signIn: (authData, authMode)=> dispatch(signIn(authData, authMode))
    }
}

const mapStateToProps = (state) =>{
    return{
        isLoading: state.ui.isLoading,
        isAuthed: state.auth.isAuthed

    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Login)

