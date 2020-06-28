import React, {Component} from 'react'
import './layout.scss'
import {connect} from 'react-redux'

class Layout extends Component {
  render() {
    
    return (
      <div className="layout">
        <main>
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