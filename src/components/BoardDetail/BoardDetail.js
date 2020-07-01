import React from 'react'
import Layout from '../../containers/Layout/Layout'
import Header from '../../containers/header/Header'
import MainContent from '../../containers/mainContent/mainContent'
class  BoardDetail extends React.Component{
    render(){
        return(
            <div>
                <h3 style={{display: "none"}}>{this.props.match.params.name}</h3>
                <Layout>
                        <Header in={false}/>
                        <MainContent boardToPrint={this.props.match.params.name}/>
                </Layout>
            </div>
        )
    }

    

}

export default BoardDetail