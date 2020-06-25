import React from 'react'
import './task.scss'

export default function Task(props){
    return(
        <div className="task" id={props.id}>
            <h3>{props.name}</h3>
            <p>Начало в {props.startAt}</p>
            <button className="task__time">Выполнено</button>
        </div>
    )
}