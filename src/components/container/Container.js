import React from 'react'
import './container.scss'


export default (props)=>{
    return(
        <div className="container">
            {props.children}
        </div>
    )
}