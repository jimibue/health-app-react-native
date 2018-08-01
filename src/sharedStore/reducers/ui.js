const intialState = {
    isLoading:false,
    apiError:false,
    apiUserLandingError: false,
    err:{}
}

const reducer = ( state = intialState, action ) => {
    switch(action.type){
        case 'UI_START_LOADING':
            return {
                ...state,
                apiError: false,
                isLoading:true
            }
        case 'UI_STOP_LOADING':
            return {
                ...state,
                isLoading: false
            }
        case 'API_ERROR':   
        console.log('action')
        console.log(action)
            return {
                ...state,
                error: action.data.stack,
                apiError: true
            } 
        default:
            return state    
    }
}
export default reducer