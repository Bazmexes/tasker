import React from 'react'
import './day.scss'
import WrapTasker from '../wrapTasker/WrapTasker'
import { connect } from 'react-redux'
import FormAtColumn from '../FormAtColumn/FormAtColumn'
import { useDispatch } from 'react-redux'
import { deleteDayAction } from '../../redux/actions/actions'
function Day(props) {
    const dispatch = useDispatch()

    const deleteDay = (e) => {
        dispatch(deleteDayAction(e.target.name))
    }
    if (props.fullDate !== '') {
        return (
            <div className='day' id={props.fullDate}>
                <div className='day__header'>
                    <p>{props.fullDate}</p>
                    <button name={props.fullDate} onClick={(e) => deleteDay(e)}>
                        Удалить
                    </button>
                </div>
                <WrapTasker tasks={props.tasks} fullDate={props.fullDate} />
                <FormAtColumn dayId={props.fullDate} />
            </div>
        )
    } else {
        return null
    }
}

export default connect(null, null)(Day)
