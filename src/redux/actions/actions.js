import {ADDDAY, ADDTASK} from './actionsTypes'
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
