import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class LeaderBoard extends Component {


  render () {

    const { users } = this.props


    return (

      <div>





      {
    Object.keys(users).map((key) => (
          <Card key={key}>
      <CardContent>
        <Typography color="textPrimary">
          {users[key].name}
          {users[key].questions.size}
        </Typography>
        <Typography color="textPrimary">
          Questions Asked: {users[key].questions.length}
        </Typography>
        <Typography color="textPrimary">
          Questions Answered: {Object.keys(users[key].answers).length}
        </Typography>
         </CardContent>
         </Card>

      ))
      }

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