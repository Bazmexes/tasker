import React, {Component} from 'react'
import './layout.scss'
import {connect} from 'react-redux'

class Layout extends Component {
  
  render() {
    
    return (
      <div className="layout">
        <main>
          <div className="addTask">
            <form action="">
              <input id="add-task__name" type="text" placeholder="Введите название задачи"/>
              <input id="add-task__date" type="text"  placeholder="Введите дату" placeholder={this.props.today}/>
              <input id="add-task__start-at" type="text" placeholder="Время начала"/>
              <a onClick={() =>{this.props.addTask()}} >Сохранить</a>
            </form>
          </div>
          { this.props.children }
        </main>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    today: state.tasksReducer.today,
    days: state.tasksReducer.days,
    tasks: state.tasksReducer.tasks
  }
}
function mapDispatchToProps(dispatch){
  return{
    addTask: () => dispatch({type:"addTask"})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout)