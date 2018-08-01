export const uiStartLoading = () =>{
    return {
        type: 'UI_START_LOADING'
    }

}
export const uiStopLoading = () =>{
    return {
        type: 'UI_STOP_LOADING'
    }
    
}


export const apiError = (error) =>{
    return {
        type: 'API_ERROR',
        data: error
    }
    
}