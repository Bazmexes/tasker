import React from 'react';
import './board.scss'
import Day from '../../../components/day/Day'
import {connect} from 'react-redux'
import TaskModal from '../../../components/TaskModal/TaskModal'
import {addDay} from '../../../redux/actions/actions'
class Board extends React.Component{
    toggleModal(){
        const form = document.getElementById('addTask')
        form.classList.toggle('addTask_active')
        const body = document.querySelector('body')
        body.classList.toggle('add-task_stop-scroll')
      }
    render(){
        console.log("tasks kdaskdajsk",this.props.tasks)  
        return(
            
            <div className="board">
                <TaskModal/>
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
                                this.toggleModal()
                            }}> + Добавить задачу</button>
                            <button>Напечатать план</button>
                        </div>
                    </div>
                    <div className="board__days_box">
                        {this.props.days.map((day, index)=>{
                            return(
                                <Day fullDate={day} key={index} tasks={this.props.tasks}/>
                            )           
                        })}
                        
                    </div>
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state){
    return{
        days: state.daysReducer.days,
        tasks: state.tasksReducer.tasks
    }
}
function mapDispatchToProps(dispatch){
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)  