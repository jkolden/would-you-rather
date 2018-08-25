import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Image, Message } from 'semantic-ui-react'

class Poll extends Component {

  render() {

    const { users, question, yourVote} = this.props

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
      <div>{Math.round((questionOneVotes / totalVotes) * 100)} %</div>
      {yourVote === 'optionOne' && <Message color='green'>Your Vote!</Message>}

      </Container>

      <Container>
     <Header as='h2'>Would you rather {question.optionTwo.text}</Header>
      <div>{questionTwoVotes} out of {totalVotes} Votes</div>
      <div>{Math.round((questionTwoVotes / totalVotes) * 100)} %</div>
       {yourVote === 'optionTwo' &&  <Message color='green'>Your Vote!</Message>}
      </Container>


      </div>
      )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]
  const yourVote = users[authedUser].answers[id]

  return {
    users,
    question,
    yourVote
  }
}

export default connect(mapStateToProps)(Poll)