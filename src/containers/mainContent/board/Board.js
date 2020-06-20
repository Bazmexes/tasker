import React from 'react';
import './board.scss'
import Day from '../../../components/day/Day'
import {connect} from 'react-redux'
class Board extends React.Component{
    render(){
        
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
                            <button className="board__button_add"> + Добавить задачу</button>
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
    return{
        tasks: state.tasksReducer.tasks,
        today: state.tasksReducer.today
    }
}
function mapDispatchToProps(dispatch){
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)