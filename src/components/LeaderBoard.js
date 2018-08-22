import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { Card, Image, Header, Divider } from 'semantic-ui-react'


class LeaderBoard extends Component {

  render () {

    const { users } = this.props

    return (

      <div>

      <Card.Group>


      {
    Object.keys(users).map((key) => (

      <Card>
<Card.Header as='h2'>
      <Image
            src={users[key].avatarURL}
            alt={`Avatar of ${users[key].name}`}
            avatar
          />
        <span>{users[key].name}</span>
        </Card.Header>

        <Card.Content>
         <Header as='h4'>Questions Answered: {Object.keys(users[key].answers).length}</Header>
         <Header as='h4'>Questions Asked: {users[key].questions.length}</Header>
         <Divider />
         <Header as='h4'>Total Points: {users[key].questions.length + Object.keys(users[key].answers).length}</Header>

        </Card.Content>
       </Card>

          ))
       }

       </Card.Group>



    </div>
      )
  }
}

function mapStateToProps ({users}) {

  return {
    users
  }
}

export default connect(mapStateToProps)(LeaderBoard)