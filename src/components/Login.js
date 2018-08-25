import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { fakeAuth } from '../utils/auth'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { Button, Divider, Form } from 'semantic-ui-react';


class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    selectedOption: ''
  };

  login = () => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(this.state.selectedOption))

    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })

    });
  };

  handleChange = (changeEvent,   value  ) => {

  console.log(value.value)

  this.setState({
    selectedOption:  value.value
  })
}

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>Login in as one of the following users to access: {from.pathname}</p>

        <Form onSubmit={this.handleSubmit}>

            <Form.Radio
              label="Sarah Edo"
              type="radio"
              name="radio"
              value="sarahedo"
              onChange={this.handleChange} />

         <Divider/>

         <Form.Radio
              label="Tyler McGinnis"
              type="radio"
              name="radio"
              value="tylermcginnis"
              onChange={this.handleChange} />

         <Divider/>

         <Form.Radio
              label="John Doe"
              type="radio"
              name="radio"
              value="johndoe"
              onChange={this.handleChange} />
         </Form>
        <Button onClick={this.login}>Log in</Button>
      </div>
    );
  }
}

export default connect()(Login)