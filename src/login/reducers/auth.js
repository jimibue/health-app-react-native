const intialState = {
    token: null,
    isAuthed: false,

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
            isAuthed:true
        }
        default:
            return state    
    }
}
export default reducer