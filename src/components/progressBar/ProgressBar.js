import React from 'react'
import './progressBar.scss'

export default function progressBar(props){
    return(
        <div className="progress-bar">
            <p>Прогресс</p>
            <svg className="progress-bar__ring" >
                <circle className="progress-bar__ring_circle" stroke="#4ab392" strokeWidth="12" cx="60" cy="60" r="52" fill="transparent"/>
            </svg>
            <p> 5/5</p>
        </div>
    )
}