import { getAllDays, getDayData }  from '../daily/processDailyData';
const rawData =[
    {
        title: "First",
        description:' 0 is not working 5 is working it',
        createdDay:0,
        data:'15243'

    },
    {
        title: "Cardio",
        description:' 0 is not working 5 is working it',
        createdDay:0,
        data:'15243'

    },
    {
       title: "Strength Traning",
       description:' 0 is not working -1 is working it!!',
       createdDay:0,
       data:'50321'
   },
   {
    title: "Cold Therapy",
    description:' 0 is not working -1 is working it!!',
    createdDay:0,
    data:'0234X'
},

   {
    title: "Groundhog Day",
    description:' 0 is not working -1 is working it!!',
    createdDay:0,
    data:'40234'
},

{
    title: "Last",
    description:' 0 is not working -1 is working it!!',
    createdDay:0,
    data:'40234'
}

]

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}


let currentDayIndex = rawData[0].data.length-1
const todaysData = getDayData(currentDayIndex + 1, rawData)

const currentPracticeIndex = 0
const intialState = {
 practices:rawData,
 currentDayIndex,
 currentPracticeIndex: currentPracticeIndex, 
 formatedData: getAllDays(8),
 todaysData,
 prevPractice: {title:'none'},
 currentPractice: todaysData [currentPracticeIndex],
 nextPractice: todaysData [currentPracticeIndex +1 ],
};

export default (state = intialState, action) => {
    switch (action.type) {
        case "SCORE_CHANGED":
            let selectedRawPractice = state.practices[state.currentPracticeIndex]
            let copyData = selectedRawPractice.data.toString()
            let updatedData = setCharAt(copyData,state.currentDayIndex, action.data)
            let updatedRawPractice = {...selectedRawPractice, data: updatedData}
            let updatedPractices =   [
                ...state.practices.slice(0, state.currentPracticeIndex),
                updatedRawPractice,
                ...state.practices.slice(state.currentPracticeIndex+1)
              ]
              let upDatedTodaysData = getDayData(state.currentDayIndex +1, updatedPractices)
          
            return {
                ...state,
                practices:updatedPractices,
                todaysData:getDayData(state.currentDayIndex, updatedPractices),
                todaysData:upDatedTodaysData,
             
                currentPractice: upDatedTodaysData [state.currentPracticeIndex],
               

            }


            case "GET_CURRENT_PRACTICE":
            return{

            }
            case "GET_NEXT_PRACTICE":
                let newIndex = state.currentPracticeIndex + 1
                let newCurrentPractice = getDayData(state.currentDayIndex +1, state.practices)
                let nextPractice = newIndex +1 < state.practices.length ? state.practices[newIndex +1 ] : {title:'none'}
                return{
                    ...state,
                    currentPracticeIndex: newIndex,
                    prevPractice: state.currentPractice,
                    currentPractice: newCurrentPractice[newIndex],
                    nextPractice
            }
            case "GET_PREV_PRACTICE":
                let newIndex1 = state.currentPracticeIndex - 1
                let newCurrentPractice1 = getDayData(state.currentDayIndex +1, state.practices)
                let prevPractice = newIndex1  != 0 ? state.practices[newIndex1   -1 ] : {title:'none'}
                return{
                    ...state,
                    currentPracticeIndex: newIndex1,
                    currentPractice: newCurrentPractice1[newIndex1],
                    nextPractice: state.currentPractice,
                    prevPractice
            }
        default:
            return state
                break;
            }
}