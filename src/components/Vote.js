import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleVote } from '../actions/questions'
import { Button, Divider, Form, Header, Image, Container } from 'semantic-ui-react';


class Vote extends Component {

  state = {
    toResults: false
  }

handleChange = (changeEvent,   value  ) => {

  console.log(value.value)

  this.setState({
    selectedOption:  value.value
  })
}

  handleSubmit = (e) => {

    e.preventDefault()

    const { dispatch, id, authedUser } = this.props

    dispatch(handleVote(authedUser, id, this.state.selectedOption))

    this.setState(() => ({
      toResults: true
    }))

  }



  render() {

    const { toResults } = this.state

    const { question, id, users } = this.props

    /*redirect to results view if submitted*/
    if (toResults === true) {
      return <Redirect to={`/questions/${id}`} />
    }

    return (
      <Container>

      <Header as='h2'>

      <Image
            src={users[question.author].avatarURL}
            alt={`Avatar of $users[question.author].name}`}
            avatar
          />
        <span>{users[question.author].name} asks if you would rather...</span>

        </Header>

        <Form onSubmit={this.handleSubmit}>

            <Form.Radio
              label={ question.optionOne.text }
              type="radio"
              name="radio"
              value="optionOne"
              onChange={this.handleChange} />

         <Divider/>

            <Form.Radio
              label={ question.optionTwo.text }
              type="radio"
              name="radio"
              value="optionTwo"
              onChange={this.handleChange} />

          <Divider/>

        <Button variant="contained" type='submit' >
        Submit
      </Button>

      </Form>

      </Container>

      )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id } ) {

  const question = questions[id]

  return {
    id,
    question,
    authedUser,
    users
  }

}


export default connect(mapStateToProps)(Vote)