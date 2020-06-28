const initialState = {
    days: ['Диплом', 'Конференция']
}

export default function( state = initialState, action){
    switch(action.type){

        case 'addDay':{
            if(state.days.indexOf(action.payload.date)!==-1){
                console.log("dsadasd")
                return{
                    days: [...state.days]
                }

            }else{
                console.log("dsadasd")
                return{
                    days: [...state.days, action.payload.date]
                }
            }
            
        }
        default:{
            return state
        }
    }
}