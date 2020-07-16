import React from 'react'
import './task.scss'
import {
    toggleIsDoneAction,
    deleteTaskAction,
} from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'
export default function Task(props) {
    const dispatch = useDispatch()
    const toggleTaskIsDone = (e) => {
        dispatch(toggleIsDoneAction(e.target.name))
    }
    const deleteTask = (e) => {
        console.log("смотри сюд",e.target.name)

        dispatch(deleteTaskAction(e.target.name))
    }
    if (props.startAt !== '') {
        if (props.isDone) {
            return (
                <div className='task task-is-done' id={props.taskId}>
                    <h3>{props.name}</h3>
                    <p>Начало в {props.startAt}</p>
                    <button
                        onClick={(e) => toggleTaskIsDone(e)}
                        name={props.taskId}
                        className='task__time'>
                        Вернуть назад
                    </button>
                    <button
                        name={props.taskId}
                        onClick={(e) => {
                            deleteTask(e)
                        }}>
                        Удалить
                    </button>
                </div>
            )
        } else {
            return (
                <div className='task' id={props.taskId}>
                    <h3>{props.name}</h3>
                    <p>Начало в {props.startAt}</p>
                    <button
                        onClick={(e) => toggleTaskIsDone(e)}
                        name={props.taskId}
                        className='task__time'>
                        Выполнено
                    </button>
                    <button 
                        name={props.taskId}
                        className="task__time"
                        onClick={(e) => {
                            deleteTask(e)
                        }}>
                        Удалить
                    </button>
                </div>
            )
        }
    } else {
        if (props.isDone) {
            return (
                <div className='task task-is-done' id={props.taskId}>
                    <h3>{props.name}</h3>
                    <button
                        onClick={(e) => toggleTaskIsDone(e)}
                        name={props.taskId}
                        className='task__time'>
                        Выполнено
                    </button>
                    <button
                        name={props.taskId}
                        onClick={(e) => {
                            deleteTask(e)
                        }}>
                        Удалить
                    </button>
                </div>
            )
        } else {
            return (
                <div className='task' id={props.taskId}>
                    <h3>{props.name}</h3>
                    <button
                        onClick={(e) => toggleTaskIsDone(e)}
                        name={props.taskId}
                        className='task__time'>
                        Выполнено
                    </button>
                    <button
                        name={props.taskId}
                        onClick={(e) => {
                            deleteTask(e)
                        }}>
                        Удалить
                    </button>
                </div>
            )
        }
    }
}
