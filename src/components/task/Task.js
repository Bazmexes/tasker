import React from 'react'
import './task.scss'

export default function Task(props){
    return(
        <div className="task">
            <h3>{props.nameOfTask}</h3>
            <p>Начало в {props.startAt}</p>
            <button className="task__time">Выполнено</button>
        </div>
    )
}