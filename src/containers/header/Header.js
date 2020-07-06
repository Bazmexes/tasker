import React from 'react'
import Container from '../../components/container/Container'
import {NavLink} from 'react-router-dom'
import './header.scss'
import {connect} from 'react-redux'
import Goals from '../mainContent/goals/Goals'
import Boards from '../../components/Boards/Boards'
class Header extends React.Component{



    render(){
        if(this.props.in === true){
            return(
                <div className="header">
                  <Container>
                  <div className="header__content">
                      <div className="header__menu">
                          <div className="header__logo" style={{paddingTop: "10px"}}>
                              <h3>Доска заданий</h3>
                          </div>
                          <div className="header__box_links">
                              <NavLink className="header__link" to={'/'}>Доски</NavLink>
                              <NavLink className="header__link" to={'/about'}>О проекте</NavLink>
                          </div>
                          <Goals/>
                        <Boards/>
                      </div>
                      
                    </div>
                  </Container>
                </div>
            )
        }else{
            return(
                <div className="header">
                  <Container>
                  <div className="header__content">
                      <div className="header__menu">
                          <div className="header__logo" style={{paddingTop: "10px"}}>
                              <h3>Доска заданий</h3>
                          </div>
                          <div className="header__box_links">
                              <NavLink className="header__link" to={'/'}>Доски</NavLink>
                              <NavLink className="header__link" to={'/about'}>О проекте</NavLink>
                          </div>
                          <Goals/>                         
                      </div>
                      
                    </div>
                  </Container>
                </div>
            )
            
        }

    }
}   

function mapStateToProps(state){
    return{
        // tasks: state.headerReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
      onAdd: () => dispatch({type: "add"})
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Header)