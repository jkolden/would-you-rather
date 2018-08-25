import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Image, Button, Header } from 'semantic-ui-react'


class Question extends Component {

  render() {

    const { question, author, id} = this.props

    return (
      <div>
      <div>

<Header as='h2'>
      <Image
            src={author.avatarURL}
            alt={`Avatar of ${author.name}`}
            avatar
          />
      <span>{author.name} asks</span>
 </Header>

      </div>

      <p>Would you rather {question.optionOne.text}...</p>
      <div>
      <Link to={`/questions/${id}`} className="question">
      <Button positive fluid>View Poll</Button>
      </Link>
      </div>
      </div>
      )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]
  const author = users[question.author]

  return {
    question,
    author,
    id
  }

}

export default connect(mapStateToProps)(Question)