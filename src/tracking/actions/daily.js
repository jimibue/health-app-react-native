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