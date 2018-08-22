import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Image } from 'semantic-ui-react'


class Question extends Component {

  render() {

    const { authedUser, users, question, hasAnswered, author, id} = this.props

    return (
      <Link to={hasAnswered === true ? `/results/${id}` : `/vote/${id}`} className="question">

      <div>

      <Image
            src={author.avatarURL}
            alt={`Avatar of ${author.name}`}
            avatar
          />
      <span>{question.author} asks would you rather...</span>

      </div>


      <span>{question.optionOne.text} </span>
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