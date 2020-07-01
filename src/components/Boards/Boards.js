import React from 'react'
import {actionAddBoard} from '../../redux/actions/actions'
import {connect} from 'react-redux'
import BoardsButton from '../Boards/BoardsButtons/BoardsButtons'
import './boards.scss'
class Board extends React.Component{
    _stopReload(e){
        e.preventDefault()
    }
    _addBoard(){
        const boardName = document.getElementById('boardNameInput')
        console.log(boardName.value)
        this.props.addBoard(boardName.value)
    }
    _printTitle(){
        if(this.props.boards.length === 0){
            return 'Список ваших доск пуст, добавте доску с помощью формы снизу'
        }else{
            return 'Список ваших досок'
        }
    }
    render()
    {
        return(
            <div className="boards">
                <div className="board__content">
                    <div className="board__content_box">
                        <p>{this._printTitle()}</p>
                        <div className="board__content_buttons-box">
                            {this.props.boards.map((board, index)=>{
                                return(
                                    <BoardsButton key={index} boardName={board}/>
                                )
                            })}
                        </div>
                        
                                        <form onSubmit={(e)=> {
                        this._stopReload()
                        this._addBoard()}}>
                            <input type="text" id="boardNameInput"/>
                            <button type="reset" onClick={()=>this._addBoard()}>Добавить новую доску</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }    
}

function mapStateToProps(state){
    return{
        boards: state.boardsReducer.boards
    }
}
function mapDispatchToProps(dispatch){
    return{
        addBoard: board => dispatch(actionAddBoard(board))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Board)