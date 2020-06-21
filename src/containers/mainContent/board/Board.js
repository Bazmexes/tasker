import React from 'react';
import './board.scss'
import Day from '../../../components/day/Day'
import {connect} from 'react-redux'
class Board extends React.Component{
    addTaskField(){
        const form = document.getElementById('addTask')
        form.classList.toggle('addTask_active')
        const body = document.querySelector('body')
        body.classList.toggle('add-task_stop-scroll')
      }
    render(){
        console.log("tasks kdaskdajsk",this.props.tasks)  
        return(
            
            <div className="board">
                <div className="board__content">
                    <div className="board__header">
                        <div className="board__extra-task_desc">
                            <div style={{display: "grid", gridTemplateColumns:"1fr 1fr", alignItems: "center", justifyItems: "center"}}>
                                <h3>12-17.08</h3>
                            </div>
                            <div>
                                <p className=" board__extra-task_text">Экстра задание</p>
                                <p className=" board__extra-task">Описание задания</p>
                            </div>
                        </div>
                        <div className="board__extra-task-buttons">
                            <button className="board__button_add" onClick={()=>{
                                this.addTaskField()
                            }}> + Добавить задачу</button>
                            <button>Напечатать план</button>
                        </div>
                    </div>
                    <div className="board__days_box">
                        
                        {this.props.tasks.map( (task,index)=>{
                            
                            return(
                                <Day key={index} tasks={task}/>
                            )
                        })}
                    </div>
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state){
    console.log('console log state at mapState',state)
    return{
        tasks: state.tasksReducer.tasks,
        today: state.tasksReducer.today,
        days: state.tasksReducer.days
    }
}
function mapDispatchToProps(dispatch){
    return{
        addTaskButton: () => dispatch({type: 'addTaskButton'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)