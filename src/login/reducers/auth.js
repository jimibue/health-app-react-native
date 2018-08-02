const intialState = {
    token: null,
    isAuthed: false,
    passcode: null,
    isPasscodeSet: false,
    ecpc:null,
}

const reducer = ( state = intialState, action ) => {
    switch(action.type){
        case 'TRY_AUTH':
            return {
                ...state,
            }
        case 'AUTH_SET_TOKEN':
        return {
            ...state,
            // encypted here?
            token: action.data,
           
        }
        case 'SET_AUTH_TO_TRUE' :
        return  {
            ...state,
            isAuthed:true
        }
        case 'AUTH_SET_PASSCODE': {
            return {
                ...state,
                isPasscodeSet: true,
                passcode: action.data
            }

        }
        case 'RESET' : {
            return {
                ...state,
                isPasscodeSet: false,
                passcode: null,
                isAuthed: false,
                token: null
            }
        }
        default:
            return state    
    }
}
export default reducer