import {ADDDAY, ADDTASK, _TOGGLEISDONE, _DELETETASK, _DELETEDAY, _NEWTIME} from './actionsTypes'

export function addDayAction(task) {
    return {
        type: ADDDAY,
        payload: task,
    }
}

export function addTask(task) {
    return {
        type: ADDTASK,
        payload: task,
    }
}

export function toggleIsDoneAction(id) {
    return {
        type: _TOGGLEISDONE,
        payload: id,
    }
}
export function deleteTaskAction(id) {
    return {
        type: _DELETETASK,
        payload: id,
    }
}
export function deleteDayAction(column) {
    return {
        type: _DELETEDAY,
        payload: column,
    }
}
export function actionNewTime(time) {
    return{
        type: _NEWTIME,
        payload: time
    }
}