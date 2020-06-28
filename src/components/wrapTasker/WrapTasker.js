import React from 'react'
import Task from '../task/Task'


export default function(props){
    console.log("wraptasker", props)
    return(
        props.tasks.map((task, index)=>{
            if(task.date === props.fullDate){
                return(
                    <Task name={task.name} startAt={task.startAt} taskId={task.id} key={index} isDone={task.taskIsDone}/>
                )
            }

        })
        
    )
}

