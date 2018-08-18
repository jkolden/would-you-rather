import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {

  render() {
    console.log(this.props)

    const { authedUser, users, question, hasAnswered, author, id} = this.props

    return (
      <Link to={hasAnswered === true ? `/results/${id}` : `/vote/${id}`} className="question">
      <div>

      <img
            src={author.avatarURL}
            alt={`Avatar of ${author.name}`}
            className='avatar'
          />


      <div>
      <span>{hasAnswered.toString()}</span>
      </div>


      {question.author} asks..
      </div>
      <span>Would you rather </span>
      <span>{question.optionOne.text} </span>
      <span>...</span>
      <div>
      <button className='btn'>View Poll</button>
      </div>


      </Link>
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

export default connect(mapStateToProps)(Question)