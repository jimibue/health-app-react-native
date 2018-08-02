import { uiStartLoading, uiStopLoading } from '../../sharedStore/actions/ui';

import { getToken } from '../../login/actions/auth';


export const scoreChanged = data => {
    return{
        type:"SCORE_CHANGED",
        data
    }
}

export const getNextPractice = () => {
    return{
        type:"GET_NEXT_PRACTICE",
    }
}


export const getPrevPractice = () => {
    return{
        type:"GET_PREV_PRACTICE",
    }
}

export const thunkDemo = () => {
    console.log('here')
    return dispatch => {
        dispatch(uiStartLoading())
        const dummyData = {name:'hello', id:123, key:123}
        fetch('https://health-tracker-83b16.firebaseio.com/test.json',{
            method: "POST",
            body: JSON.stringify(dummyData)
        })
        //catch will only catch failed network requests.  It will not catch 4xx ann 5xx errs
        .catch( err => {
            console.log(err)
            dispatch(uiStopLoading())
        })
        .then( res =>res.json())
        .then( parsedRes =>{
            console.log(parsedRes)
            dispatch(uiStopLoading())
        })
    }
}

export const thunkGetDemo = () => {
    console.log(' thunk get demo called')
    return (dispatch, getState) => {
        console.log(' thunk get demo dispatch called')
        dispatch(uiStartLoading())
        dispatch(getToken())            
            .then( token => {
                console.log('token')
                console.log(token)
                fetch(`https://health-tracker-83b16.firebaseio.com/test.json?auth=${token}`,{
                    method: "GET",
                })
                //catch will only catch failed network requests.  It will not catch 4xx ann 5xx errs
                .catch( err => {
                    console.log(err)
                    dispatch(uiStopLoading())
                })
                .then( res =>res.json())
                .then( parsedRes =>{
                    console.log(parsedRes)
                    dispatch(uiStopLoading())
                })
            })
            .catch( () => alert('no valid token found'))
    }
}

export const thunkGetDemo1 = () => {
    console.log('here')
    return (dispatch, getState) => {
        dispatch(uiStartLoading())
        //redux thunk knows about getState
        const token = getState().auth.token 
        if(!token){
            //
            console.log('no token')
            return
        }
        const dummyData = {name:'hello', id:123, key:123}
        fetch(`https://health-tracker-83b16.firebaseio.com/test.json?auth=${token}`,{
            method: "GET",
        })
        //catch will only catch failed network requests.  It will not catch 4xx ann 5xx errs
        .catch( err => {
            console.log(err)
            dispatch(uiStopLoading())
        })
        .then( res =>res.json())
        .then( parsedRes =>{
            console.log(parsedRes)
            dispatch(uiStopLoading())
        })
    }
}