import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import Vote from './Vote'

class ResultsPage extends Component {

  render () {
    const { id, hasAnswered, question } = this.props

    if (typeof(question) === 'undefined') {
      return <p>404: No question with that id can be found</p>
    }

    if (hasAnswered === true) {

      return (
      <div>
      <Poll id={id}/>
      </div>
      )
    }

    return (
      <div>
      <Vote id={id}/>
      </div>
      )
  }
}

function mapStateToProps ({authedUser, users, questions}, props ) {

  const { id } = props.match.params
  const question = questions[id]

  if (typeof(question) === 'undefined') {
    return question
  }

  const hasAnswered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)

   return {
    id,
    hasAnswered,
    question
  }
}


export default connect(mapStateToProps)(ResultsPage)