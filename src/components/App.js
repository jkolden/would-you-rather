import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import ResultsPage from './ResultsPage'
import LeaderBoard from './LeaderBoard'
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

export default connect()(App);
