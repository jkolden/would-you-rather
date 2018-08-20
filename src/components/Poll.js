import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Poll extends Component {

  render() {

    const { authedUser, users, question, hasAnswered, author, id} = this.props

    const questionOneVotes = question.optionOne.votes.length
    const questionTwoVotes = question.optionTwo.votes.length
    const totalVotes = questionOneVotes + questionTwoVotes

    return (
      <div className="question">
      <div>

      <img
            src={author.avatarURL}
            alt={`Avatar of ${author.name}`}
            className='avatar'
          />


      <div>
      <span>{hasAnswered.toString()}</span>
      </div>


      Added by {question.author}
      </div>
      <div className='poll-question'>
      <div>Would you rather {question.optionOne.text} </div>
      <div className='center'>{questionOneVotes} out of {totalVotes} Votes</div>
      </div>
      <div className='poll-question'>
      <div>Would you rather {question.optionTwo.text}</div>
      <div className='center'>{questionTwoVotes} out of {totalVotes} Votes</div>
      </div>


      </div>
      )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]
  const hasAnswered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
  const author = users[question.author]


  return {
    authedUser,
    users,
    question,
    hasAnswered,
    author
  }

}

export default connect(mapStateToProps)(Poll)