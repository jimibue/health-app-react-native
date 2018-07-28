const test = [
    {
        title: "Cardio",
        description:' 0 is not working, 5 is working it',
        createdDay:0,
        data:'0123',
        key:'practivekey1',
        id:'practivekey1'

    },
    {
       title: "Strength Training",
       description:' 0 is not working, 5 is working it',
       createdDay:0,
       data:'0334',
       key:'practivekey2',
       id:'practivekey2',
   }
]


let formattedData = test.map( item =>{

})


export function getAllDays (length) {
  
    let data = []
    for( var i =0; i<length; i++){
        const dayPractices = getDayData(i, test)
        data.push({currentIndex:0, dayPractices: dayPractices})
    }

    return data

}
export function getDayData (dayIndex, array){
   return array.map( practice =>{
        return{
            key: practice.key,
            id: practice.id,
            date: 'June'+ dayIndex,
            score: practice.data.charAt(dayIndex -1),
            scoree:1,
            title: practice.title,
            description: practice.description
        }
    })
}