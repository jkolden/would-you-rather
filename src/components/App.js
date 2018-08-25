import React, { Component, Fragment } from 'react'
import logo from '../logo.svg'
import '../App.css'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Question from './Question'
import ResultsPage from './ResultsPage'
import LeaderBoard from './LeaderBoard'
import Vote from './Vote'
import Nav from './Nav'
import Login from './Login'
import { fakeAuth } from '../utils/auth.js'
import AuthButton from './AuthButton'




const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);



class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {

    return (
      <Router>

      <div className="container">
      <AuthButton />
       <Nav />
        {this.props.loading === true ? null :
          <div>
          <PrivateRoute path='/' exact component={Dashboard} />
          <PrivateRoute path='/add' exact component={NewQuestion} />
          <PrivateRoute path='/leaderboard' exact component={LeaderBoard} />
          <PrivateRoute path='/questions/:id' exact component={ResultsPage}/>
          <Route path='/login' exact component={Login}/>

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
