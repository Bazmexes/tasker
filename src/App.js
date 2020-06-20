import React from 'react'
import Header from './containers/header/Header'
import './App.css';
import Layout from './containers/Layout/Layout'
import MainContent from './containers/mainContent/mainContent'
class App extends React.Component {

  

  render(){
    return(
      <div className="App">
        <Layout>
          <Header/>
          <MainContent/>
        </Layout>
        
      </div>
    )
  }
}

export default App
