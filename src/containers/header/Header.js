import React from 'react'
import Container from '../../components/container/Container'
import {NavLink} from 'react-router-dom'
import './header.scss'
import {connect} from 'react-redux'
class Header extends React.Component{



    render(){
        console.log(this.props)
        return(
            <div className="header">
              <Container>
              <div className="header__content">
                  <div className="header__menu">
                      <div className="header__logo">
                          <h3>Доска заданий</h3>
                      </div>
                      <div className="header__box_links">
                          <NavLink className="header__link" to={'/'}>Доска</NavLink>
                          <NavLink className="header__link" to={'/about'}>О проекте</NavLink>
                      </div>
                  </div>
                </div>
              </Container>
            </div>
        )
    }
}   

function mapStateToProps(state){
    console.log(state)
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