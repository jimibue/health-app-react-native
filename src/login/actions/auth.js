
import { uiStartLoading, uiStopLoading } from '../../sharedStore/actions/ui';

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

export const authSignup = (data) =>{
    console.log('sign up')
    return dispatch => {
        dispatch( uiStartLoading() )
        fetch(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`,{
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
            console.log(parsedResponse)
            //specific to Firbase
            dispatch( uiStopLoading() )
            if(parsedResponse.error){
                alert('error occured tried agin')
            } else {
                //navigate to app here?
                alert('success')
                dispatch(authSetToken(parsedResponse.idToken))
                dispatch( NavigationActions.navigate({ routeName: 'App' } ))
            }
            
        } )
        .catch( (err)=> {
            console.log(err)
            dispatch( uiStopLoading() )
        })
    }
}

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
            console.log(parsedResponse)
            //specific to Firbase
            dispatch( uiStopLoading() )
            if(parsedResponse.error){
                alert('error occured tried agin')
            } else {
                //navigate to app here?
                alert('success')
                dispatch(authSetToken(parsedResponse.idToken))
                dispatch( NavigationActions.navigate({ routeName: 'App' } ))
            }
            
        } )
        .catch( (err)=> {
            console.log(err)
            dispatch( uiStopLoading() )
        })
    }

}

// export const getToken = () =>{
//     return (dispatch, getState) => {
//         const promise = (resolve, reject) =>{
//             const token = getState().auth.token
//             if(!token){
//                 reject('')
//             }else{
//                 resolve(token)
//             }
//         }

//     }
// }

const authSetToken = (token) =>{
    return{
        type:'AUTH_SET_TOKEN',
        data: token
    }
}