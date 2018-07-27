import { getAllDays }  from '../daily/processDailyData';
const rawData =[
    {
        title: "Cardio",
        description:' 0 is not working 5 is working it',
        createdDay:0,
        data:'01232145123'

    },
    {
       title: "Strength Traning",
       description:' 0 is not working 5 is working it',
       createdDay:0,
       data:'0334155343'
   }
]

const intialState = {
 practices:rawData,
 formatedData: getAllDays(8)
};

export default (state = intialState, action) => {
    switch (action.type) {
        case "KEY":
            break;
        default:
            return state
                break;
            }
}