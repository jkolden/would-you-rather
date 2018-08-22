import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import { Container, Header, Image, Message } from 'semantic-ui-react'

class Poll extends Component {

  render() {

    const { authedUser, users, question, hasAnswered, author, id, yourVote} = this.props

    const questionOneVotes = question.optionOne.votes.length
    const questionTwoVotes = question.optionTwo.votes.length
    const totalVotes = questionOneVotes + questionTwoVotes

    return (
      <div>

      <Header as='h2'>

      <Image
            src={users[question.author].avatarURL}
            alt={`Avatar of ${users[question.author].name}`}
            avatar
          />
        <span>Asked by {users[question.author].name}</span>

        </Header>

      <div>


      </div>

      <Container>
      <Header as='h2'>Would you rather {question.optionOne.text}</Header>

      <div>{questionOneVotes} out of {totalVotes} Votes</div>
      {yourVote === 'optionOne' && <Message color='green'>Your Vote!</Message>}

      </Container>

      <Container>
     <Header as='h2'>Would you rather {question.optionTwo.text}</Header>
      <div>{questionTwoVotes} out of {totalVotes} Votes</div>
       {yourVote === 'optionTwo' &&  <Message color='green'>Your Vote!</Message>}
      </Container>


      </div>
      )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]
  const hasAnswered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
  const author = users[question.author]
  const yourVote = users[authedUser].answers[id]



  return {
    authedUser,
    users,
    question,
    hasAnswered,
    author,
    yourVote
  }

}

export default connect(mapStateToProps)(Poll)