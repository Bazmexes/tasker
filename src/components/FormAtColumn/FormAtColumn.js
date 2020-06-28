import React from 'react';
import './formAtColumn.scss'
import {addTask} from '../../redux/actions/actions'

import { useDispatch} from 'react-redux';

export default function FormAtColumn(props){
    const dispatch = useDispatch();

    const  toggleForm=()=>{
        const form = document.getElementById(`form-at-column__div${props.dayId}`).classList.toggle('formAtColumn__div_active')
        const button = document.getElementById(`addTaskButtonAt${props.dayId}`).classList.toggle('button_none')
    }
    const addTaskFunc = ()=>{
        const nameInput = document.getElementById(`nameForm${props.dayId}`).value
        const dateInput = props.dayId
        const startAtInput = document.getElementById(`startAtForm${props.dayId}`).value
        console.log("nameInput", nameInput, dateInput, startAtInput)
        const task = {
            name:nameInput,
            date: dateInput,
            startAt: startAtInput,
            id: Math.floor(Math.random()*2001),
            taskIsDone: false
        }
        console.log("task ", task)
        dispatch(addTask(task))
    }
    const stopReload = (e) =>{
        e.preventDefault()
    }
        return(
            <div style={{display: "grid"}}>
                <div className="form-at-column__div" id={`form-at-column__div${props.dayId}`}>
                    <form className="form-at-column" onSubmit={(e)=>{stopReload(e) 
                        toggleForm()
                        addTaskFunc()}}>
                        <input type="text" id={`nameForm${props.dayId}`} name="name" style={{padding:"5px 5px 20px 5px"}}placeholder="Введите название подзадачи"/>
                        <input type="text" id={`startAtForm${props.dayId}`} name="startAt" placeholder="Время начала" style={{padding: '5px'}}/>
                        <button type="submit" >Добавить подзадачу</button>
                        <button type="button" onClick={()=>{
                            toggleForm()
                        }}>Отмена</button>
                    </form>
                </div>
                <button onClick={()=>toggleForm()} id={`addTaskButtonAt${props.dayId}`} className="button_addTask">Добавить подзадачу</button>
            </div>
        )
}


