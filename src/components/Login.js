import React from 'react'
import { Redirect } from 'react-router-dom'
import { fakeAuth } from '../utils/auth'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react';


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

 handleChange = (e, { value }) =>
  {this.setState({selectedOption:  value })
  console.log(value)
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
        <Form.Group>
          <Form.Radio
            label='Sarah Edo'
            value='sarahedo'
            checked={this.state.selectedOption === 'sarahedo'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Tyler McGinnis'
            value='tylermcginnis'
            checked={this.state.selectedOption === 'tylermcginnis'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='John Doe'
            value='johndoe'
            checked={this.state.selectedOption === 'johndoe'}
            onChange={this.handleChange}
          />
        </Form.Group>
         </Form>
        <Button onClick={this.login}>Log in</Button>
      </div>
    );
  }
}

export default connect()(Login)