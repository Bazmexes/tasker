import React from 'react'
import './goals.scss'
import ProgressBar from '../../../components/progressBar/ProgressBar'

class Goals extends React.Component{


    render() {
        return (
            <div className="goals">
                <h3>Трекер активности</h3>
                <ProgressBar/>
                <div className="goals__buttons">
                    <button className="goals__button">Задачи на неделю</button>
                    <button className="goals__button">Заметки</button>
                </div>
            </div>
        )
    }
}

export default Goals