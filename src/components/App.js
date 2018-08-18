import React, { Component, Fragment } from 'react'
import logo from '../logo.svg'
import '../App.css'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Question from './Question'
import ResultsPage from './ResultsPage'
import LeaderBoard from './LeaderBoard'
import Vote from './Vote'
import Nav from './Nav'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>


      <div className="container">
       <Nav />
        {this.props.loading === true ? null :
          <div>
          <Route path='/' exact component={Dashboard} />
          <Route path='/new' exact component={NewQuestion} />
          <Route path='/leader' exact component={LeaderBoard} />
          <Route path='/results/:id' component={ResultsPage}/>
          <Route path='/vote/:id' component={Vote}/>

          </div>
       }

      </div>


      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {

  return {
    loading: authedUser === null
  }
}

export default connect()(App);
