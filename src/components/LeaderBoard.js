import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { Card, Image, Header, Divider } from 'semantic-ui-react'


class LeaderBoard extends Component {

  render () {

    const { users, scores } = this.props

    return (

      <div>
      <Card.Group>

      {
    scores.map((obj) => {

      return (

      <Card>
      <Card.Header as='h2'>
      <Image
            src={obj.avatar}
            alt={`Avatar of ${obj.name}`}
            avatar
          />
        <span>{obj.name}</span>
        </Card.Header>

        <Card.Content>
         <Header as='h4'>Questions Answered: {obj.answers}</Header>
         <Header as='h4'>Questions Asked: {obj.questions}</Header>
         <Divider />
         <Header as='h4'>Total Points: {obj.total}</Header>

        </Card.Content>
       </Card>
          )}
        )
       }

       </Card.Group>
    </div>
      )
  }
}

function mapStateToProps ({users}) {

 let scores = Object.keys(users).map((key) => {

    return {
      'user': key,
      'name': users[key].name,
      'avatar': users[key].avatarURL,
      'answers': Object.keys(users[key].answers).length,
      'questions': users[key].questions.length,
      'total': Object.keys(users[key].answers).length + users[key].questions.length
    }

  }).sort(function(a, b) {
    return b.total - a.total
  })


  return {
    users,
    scores
  }
}

export default connect(mapStateToProps)(LeaderBoard)