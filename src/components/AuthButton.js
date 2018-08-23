import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { fakeAuth } from '../utils/auth'
import { Image } from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'

const AuthButton = withRouter(
  ({ history, ...props }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <span>{props.users[props.authedUser].name}</span>
        <Image
            src={props.users[props.authedUser].avatarURL}
            alt={`Avatar of ${props.users[props.authedUser].name}`}
            avatar
          />

        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/login"));
            props.dispatch(setAuthedUser(''))
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

function mapStateToProps ({authedUser, users } ) {

  return {
    authedUser,
    users

  }

}


export default connect(mapStateToProps)(AuthButton)