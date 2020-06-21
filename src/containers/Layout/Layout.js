import React, {Component} from 'react'
import './layout.scss'
import {connect} from 'react-redux'

class Layout extends Component {

  stopReload(e){
    e.preventDefault()
  }

  addTaskField(){
    const form = document.getElementById('addTask')
    form.classList.toggle('addTask_active')
    const body = document.querySelector('body')
    body.classList.toggle('add-task_stop-scroll')
  } 
  render() {
    
    return (
      <div className="layout">
        <main>
          <div className="add-task__wrapper">
            <div className="addTask" id="addTask">
              <div className="add-task__content">
                <div className="add-task__h3">
                  <h3>Добавить задание</h3>
                  </div>
                        <form onSubmit={this.stopReload} className="add-task__form">
                          <div className="add-task__inputs_div">
                            <input id="add-task__name" type="text" placeholder="Введите название задачи"/>
                            <input id="add-task__date" type="text"  placeholder="Введите дату" placeholder={this.props.today}/>
                            <input id="add-task__start-at" type="text" placeholder="Время начала"/></div>
                          <div className="add-task__buttons_div">
                            <button id="add-task__button" type="success" onClick={() =>{
                                this.props.addTask() 
                                this.addTaskField()
                              }
                            } >Добавить задание</button>
                          <button onClick={()=>{this.addTaskField()}}>Закрыть</button>
                          </div>
                        </form>
                </div>
            </div>
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