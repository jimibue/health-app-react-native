import { AsyncStorage } from 'react-native';
import { uiStartLoading, uiStopLoading } from '../../sharedStore/actions/ui';

import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

const API_KEY = 'AIzaSyDAeBFY3NppGrSIJeoh_llOFDhomHpL65g'

import { NavigationActions } from 'react-navigation'


export const tryAuth = (data, authMode) =>{

    if(authMode =='Sign Up'){
        return dispatch=> {
            dispatch(authSignup(data))
        } 
    }
    else {
        //login
        dispatch(signIn(data))
    }
}

// export const authSignup = (data) =>{
//     console.log('sign up')
//     return dispatch => {
//         dispatch( uiStartLoading() )
//         fetch(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`,{
//             method:"POST",
//             body:JSON.stringify({
//                 email: data.email,
//                 password: data.password,
//                 returnSecureToken: true
//             }),
//             headers:{
//                 "Content-Type":'application/json'
//             }
//         })
//         .then( (res) => res.json())
//         .then( (parsedResponse) => {
//             console.log(parsedResponse)
//             //specific to Firbase
//             dispatch( uiStopLoading() )
//             if(parsedResponse.error){
//                 alert('error occured tried agin')
//             } else {
//                 //navigate to app here?
//                 alert('success')
//                 dispatch(authSetToken(parsedResponse.idToken))
//                 dispatch( NavigationActions.navigate({ routeName: 'App' } ))
//             }
            
//         } )
//         .catch( (err)=> {
//             console.log(err)
//             dispatch( uiStopLoading() )
//         })
//     }
// }

// mobile app will only have this
export const signIn = (data) =>{
    console.log('sign in ')
    return dispatch => {
        dispatch( uiStartLoading() )
        fetch(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`,{
            method:"POST",
            body:JSON.stringify({
                email: data.email,
                password: data.password,
                returnSecureToken: true
            }),
            headers:{
                "Content-Type":'application/json'
            }
        })
        .then( (res) => res.json())
        .then( (parsedResponse) => {
            //specific to Firbase
            dispatch( uiStopLoading() )
            if(parsedResponse.error){
                alert('error occured tried agin')
            } else {
                //navigate to app here?
                alert('success')
                dispatch(authStoreToken(parsedResponse.idToken))
                dispatch(setAuthToTrue())
                dispatch( NavigationActions.navigate({ routeName: 'App' } ))
            }
            
        } )
        .catch( (err)=> {
            console.log(err)
            dispatch( uiStopLoading() )
        })
    }

}

export const getToken = () =>{
    return (dispatch, getState) => {
        const promise = new Promise((resolve, reject) =>{
            const token = getState().auth.token
            console.log('async staorgwe')
           
            if(!token){
                AsyncStorage.getItem('tp:auth:token')
                .catch( err => reject)
                .then( tokenFromStorage => {
                    if(!tokenFromStorage){
                        reject()
                        return;
                    }
                    dispatch(authSetToken(tokenFromStorage))
                    dispatch(setAuthToTrue())
                    resolve(tokenFromStorage)
                })
                reject('')
            }else{
                resolve(token)
            }
        })
        return promise

    }
}

export const authStoreToken = token =>{
    console.log('authsettoken')
    return dispatch => {
        dispatch(authSetToken(token))
        //need to encyrpt here
        AsyncStorage.setItem('tp:auth:token', token)
    }
}

export const setupPasscode = (code) => {
    console.log('setupPasscode')
    console.log(code)
    return dispatch => {
             //need to encyrpt here
        let ecpc = sha256(code)
        let x = Base64.stringify(ecpc)
        dispatch(authSetPasscode(x))
        AsyncStorage.setItem('tp:auth:passcode', x)
        AsyncStorage.setItem('tp:auth:isPasscodeSet', 'true' )
    }

    
}

export const getPasscode = () => {
    return dispatch => {
        AsyncStorage.getItem('tp:auth:passcode')
        .catch( err => reject)
        .then( passcodeFromStorage => {
            dispatch(authSetPasscode(passcodeFromStorage))
        })
    }
}

export const authAutoSignIn = () => {
    console.log('auto sign in called')
    return dispatch => {
        dispatch(getToken())
            .then( token => {console.log('need to redirect here')})
            .catch(err => console.log('failed to get token'))
            
    }
}

const setAuthToTrue = () =>{
    return {
        type: "SET_AUTH_TO_TRUE"
    }
}

const authSetToken = (token) =>{
    return{
        type:'AUTH_SET_TOKEN',
        data: token
    }
}

const authSetPasscode = (code) => {
    return {
        type:'AUTH_SET_PASSCODE',
        data: code
    }
}

export const resetShit = () =>{
  
    return dispatch => {
            AsyncStorage.removeItem('tp:auth:token')
            AsyncStorage.removeItem('tp:auth:passcode')
            AsyncStorage.removeItem('tp:auth:isPasscodeSet')
            AsyncStorage.removeItem('tp:auth:isPasscodeSet')
        
            dispatch(reset())
            //want to naviagte here 
        
    }
                    
        
   

}
const reset = () =>{
    return{
        type:'RESET'
    }
}