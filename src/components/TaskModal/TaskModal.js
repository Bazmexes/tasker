import React from 'react'
import { connect } from 'react-redux'
import { addDayAction, addTask } from '../../redux/actions/actions'
import './taskModal.scss'
class ModalTask extends React.Component {
    state = {
        name: '',
        date: '',
        startAt: '',
    }
    stopReload(e) {
        e.preventDefault()
    }
    toggleModal() {
        const form = document.getElementById('addTask')
        form.classList.toggle('addTask_active')
        const body = document.querySelector('body')
        body.classList.toggle('add-task_stop-scroll')
    }

    render() {
        return (
            <div className='add-task__wrapper'>
                <div className='addTask' id='addTask'>
                    <div className='add-task__content'>
                        <div className='add-task__h3'>
                            <h3>Добавить колонку</h3>
                        </div>
                        <form
                            action=''
                            onSubmit={this.stopReload}
                            className='add-task__form'>
                            <div className='add-task__inputs_div'>
                                <input
                                    id='add-task__date'
                                    type='text'
                                    name='date'
                                    onChange={this._handleInputChange}
                                    placeholder='Введите название колонки'
                                />
                                <input
                                    id='add-task__name'
                                    type='text'
                                    name='name'
                                    onChange={this._handleInputChange}
                                    placeholder='Название задачи'
                                />
                                <input
                                    id='add-task__start-at'
                                    type='text'
                                    name='startAt'
                                    onChange={this._handleInputChange}
                                    placeholder='Время начала задачи'
                                />
                            </div>
                            <div className='add-task__buttons_div'>
                                <button
                                    id='add-task__button'
                                    type='success'
                                    onClick={() => {
                                        this._addTaskButton()
                                    }}>
                                    Добавить задание
                                </button>
                                <button
                                    type='button'
                                    onClick={() => {
                                        this.toggleModal()
                                    }}>
                                    Закрыть
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    _handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    _addTaskButton = () => {
        const task = {
            ...this.state,
        }
        this.props.addDay(task)
        this.props.addTask(task)
        this.toggleModal()
        console.log(task)
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addDay: (task) => dispatch(addDayAction(task)),
        addTask: (task) => dispatch(addTask(task)),
    }
}
export default connect(null, mapDispatchToProps)(ModalTask)
