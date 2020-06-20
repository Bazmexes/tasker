import React from 'react'
import Container from '../../components/container/Container'
import Goals from './goals/Goals'
import Board from './board/Board'
import './mainContent.scss'
class mainContent extends React.Component{



    render(){
        return(
            <div className="mainContent">
                <Container>
                    <div className="mainContent__content">
                        <Goals/>
                        <Board/>
                    </div>
                </Container>
            </div>
        )
    }
}

export default mainContent