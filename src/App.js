import React from 'react'
import Header from './containers/header/Header'
import './App.scss';
import Layout from './containers/Layout/Layout'
import TaskModal from './components/TaskModal/TaskModal'
import MainContent from './containers/mainContent/mainContent'
import {Helmet} from "react-helmet";
class App extends React.Component {

  

  render(){
    return(
      <div className="App">
        <Helmet>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>

        </Helmet>
        <TaskModal/>
        <Layout>
          <Header/>
          <MainContent/>
        </Layout>
        
      </div>
    )
  }
}

export default App
