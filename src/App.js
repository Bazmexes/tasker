import React from 'react'
import Header from './containers/header/Header'
import './App.scss';
import Layout from './containers/Layout/Layout'
import {Helmet} from "react-helmet";
import {Route, Switch, NavLink} from "react-router-dom"
import BoardDetail from './components/BoardDetail/BoardDetail'
class App extends React.Component {

  

  render(){
    return(
      <div className="App">
        <Helmet>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        </Helmet>
        <Switch>
          <Route path='/' exact render={()=>
                  <Layout>
                    <Header in={true}/>
                </Layout>
          }/>
          <Route path="/board/:name" component={BoardDetail}/>
          <Route render={()=> <div style={{display: "grid", justifyItems: "center"}}><h2>Страница не найдена</h2><NavLink to="/">Вернуться на главную</NavLink></div>}/>
        </Switch>
      </div>
    )
  }
}

export default App
