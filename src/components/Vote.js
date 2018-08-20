import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { handleVote } from '../actions/questions'

class Vote extends Component {

handleChange = (changeEvent) => {

  console.log('You selected ', changeEvent.target.value)

  this.setState({
    selectedOption: changeEvent.target.value
  })
}

  handleSubmit = (e) => {

    e.preventDefault()

    console.log('I have been submitted')

    const { dispatch, id, authedUser } = this.props

    dispatch(handleVote(authedUser, id, this.state.selectedOption))

    return <Redirect to='/' />

  }



  render() {

    const { question } = this.props

    return (
<form onSubmit={this.handleSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="radio"
              value="optionOne"
              onChange={this.handleChange} />
            { question.optionOne.text }
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="radio"
              value="optionTwo"
              onChange={this.handleChange} />
            { question.optionTwo.text }
          </label>
        </div>

        <button className='btn' type='submit'>Submit</button>

      </form>

      )
  }
}

function mapStateToProps ({authedUser, users, questions}, props ) {

  const { id } = props.match.params
  const question = questions[id]

  return {
    id,
    question,
    authedUser
  }

}


export default connect(mapStateToProps)(Vote)