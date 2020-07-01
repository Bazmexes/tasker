import React from 'react'
import {useDispatch, useSelector, connect} from 'react-redux'
import BoardsButton from '../Boards/BoardsButtons/BoardsButtons'
import './boards.scss'
class Board extends React.Component{


    render()
    {
        console.log("dasdasdas",this.props.boards)
        return(
            <div className="boards">
                <div className="board__content">
                    {this.props.boards.map((board, index)=>{
                        return(
                            <BoardsButton boardName={board}/>
                        )
                    })}
                    <h2>govno</h2>
                </div>
            </div>
        )
    }    
}
function mapDispatchToProps(dispatch){
    return{

    }
}
function mapStateToProps(state){
    return{
        boards: state.boardsReducer.boards
    }
}
export default connect(mapStateToProps, null)(Board)