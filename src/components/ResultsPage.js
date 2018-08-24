import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import Vote from './Vote'

class ResultsPage extends Component {

  render () {
    const { id, question, hasAnswered } = this.props

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
  const yourVote = users[authedUser].answers[id]
  const hasAnswered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)


   return {
    id,
    question,
    hasAnswered

  }
}


export default connect(mapStateToProps)(ResultsPage)