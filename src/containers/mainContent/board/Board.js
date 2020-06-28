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
        const column = document.getElementById('addNewInput').value
        this.props.addDay(column)
    }
    _stopReload(e) {
        e.preventDefault()
    }
    render() {
        console.log('tasks kdaskdajsk', this.props.tasks)
        return (
            <div className='board'>
                <div className='board__content'>
                    <div className='board__header'>
                        <div className='board__extra-task_desc'>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    alignItems: 'center',
                                    justifyItems: 'center',
                                }}>
                                <h3>12-17.08</h3>
                            </div>
                            <div>
                                <p className=' board__extra-task_text'>
                                    Экстра задание
                                </p>
                                <p className=' board__extra-task'>
                                    Описание задания
                                </p>
                            </div>
                        </div>
                        <form
                            onSubmit={(e) => this._stopReload(e)}
                            className='board__extra-task-buttons'>
                            <button
                                type='reset'
                                className='board__button_add'
                                onClick={() => {
                                    this._addNewColumn()
                                }}>
                                + Добавить колонку
                            </button>
                            <input
                                placeholder='Название колонки'
                                id='addNewInput'
                            />
                        </form>
                    </div>
                    <div className='board__days_box'>
                        {this.props.days.map((day, index) => {
                            return (
                                <Day
                                    fullDate={day}
                                    key={index}
                                    tasks={this.props.tasks}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        days: state.daysReducer.days,
        tasks: state.tasksReducer.tasks,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addDay: (columnName) => dispatch(addDayAction(columnName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
