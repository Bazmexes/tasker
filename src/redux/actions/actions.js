import {ADDDAY, ADDTASK, _TOGGLEISDONE} from './actionsTypes'
export function addDay(task){
    return{
        type: ADDDAY,
        payload: task
    }
}

export function addTask(task){
    return{
        type: ADDTASK,
        payload: task
    }
}

export function toggleIsDoneAction(id){
    return{
        type: _TOGGLEISDONE,
        payload: id
    }
}