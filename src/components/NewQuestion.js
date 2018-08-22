import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Segment, Button, Divider } from 'semantic-ui-react'
import { Checkbox, Form, TextArea } from 'semantic-ui-react'



class NewQuestion extends Component {

  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleOptionOneChange = (e) => {
    const optionOne = e.target.value

    this.setState(() => ({
      optionOne

    }))
  }

  handleOptionTwoChange = (e) => {
    const optionTwo = e.target.value

    this.setState(() => ({
      optionTwo
    }))
  }

  handleSubmit = (e) => {

    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo
    }

    dispatch(handleAddQuestion(question))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }))
  }

  render() {
    const { optionOne, optionTwo, toHome } = this.state

    /*redirect to home view if submitted*/
    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
      <h3 className="center">Compose New Question</h3>

      <Form className="new-question" onSubmit={this.handleSubmit}>

    <Form.Field>
      <TextArea
      placeholder="Enter the first option"
      value={optionOne}
      onChange={this.handleOptionOneChange}
      maxLength={280}
      />
    </Form.Field>

    <Divider horizontal>Or</Divider>

    <Form.Field>
      <TextArea
      placeholder="Enter the second option"
      value={optionTwo}
      onChange={this.handleOptionTwoChange}
      maxLength={280}
      />
    </Form.Field>

      <Button
      positive
      type='submit'
      disabled={optionOne === '' || optionTwo === ''}
      >Submit</Button>

      </Form>

      </div>

      )
  }

}




export default connect()(NewQuestion)
