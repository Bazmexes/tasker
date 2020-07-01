import {_ADDBOARD} from '../actions/actionsTypes'
const initialState = {
    boards: ['dsds', 'govno', 'suka']
}

export default function (state = initialState, action){

    switch(action.type){
        case _ADDBOARD:{
            if(state.boards.indexOf(action.payload)===-1 && action.payload !== ''){
                return{
                    boards: [...state.boards, action.payload]
                }
            }
            else{
                return state
            }
        }
        default:{
            return state
        }
    }
}