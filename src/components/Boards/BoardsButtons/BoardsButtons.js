import React from 'react'
import './boardsButtons.scss'
import {NavLink, withRouter} from 'react-router-dom'
function BoardsButtons(props){
    return(
        <button className="board__button" onClick={()=> props.history.push(`board/${props.boardName}`.toLowerCase())}>{props.boardName}</button>
    )
}

export default withRouter(BoardsButtons)