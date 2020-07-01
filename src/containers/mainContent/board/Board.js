import React from 'react'
import './board.scss'
import Day from '../../../components/day/Day'
import { connect } from 'react-redux'
import { addDayAction } from '../../../redux/actions/actions'
class Board extends React.Component {
    toggleModal() {
        const form = document.getElementById('addTask')
        form.classList.toggle('addTask_active')
        const body = document.querySelector('body')
        body.classList.toggle('add-task_stop-scroll')
    }
    _addNewColumn() {
        const column = {column: document.getElementById('addNewInput').value, board: this.props.boardToPrint}
        if (column === '') {
            alert('Нужно заполнить название колонки справа')
        } else {
            this.props.addDay(column)
        }
    }
    _stopReload(e) {
        e.preventDefault()
    }

    
    render() {
        console.log('tasks kdaskdajsk', this.props.days, this.props.boardToPrint)
        return (
            <div className='board'>
                <div className='board__content'>
                    <div className='board__header'>
                        <div className='board__extra-task_desc'>

                            <div className="board__extra-task_p">
                                <p className='board__extra-task_text'>
                                    {this.props.boardToPrint}
                                </p>
                            </div>
                        </div>
                        <form
                            onSubmit={(e) => this._stopReload(e)}
                            className='board__extra-task-buttons'>
                            
                            <input
                                placeholder='Название колонки'
                                id='addNewInput'
                            />
                            <button
                                type='reset'
                                className='board__button_add'
                                onClick={() => {
                                    this._addNewColumn()
                                }}>
                                + Добавить колонку
                            </button>
                        </form>
                    </div>
                    <div className='board__days_box'>
                        {this.props.days.reverse().map((day, index) => {
                            if(day.board===this.props.boardToPrint){
                                return (
                                    <Day 
                                        fullDate={day.column}
                                        key={index}
                                        tasks={this.props.tasks}
                                    />
                                )
                            }else{
                                console.log(false)
                                return null
                            }

                        })}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        days: [...state.daysReducer.days],
        tasks: state.tasksReducer.tasks,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addDay: (columnName) => dispatch(addDayAction(columnName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
