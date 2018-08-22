import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


class Dashboard extends Component {

  state = {
    value: 0,
  }

   handleChange = (event, value) => {
    this.setState({ value });
  }

  render () {

        const { value } = this.state;

    return (
      <div>
      <h3>Your Questions</h3>
      <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Unanswered Questions" />
            <Tab label="Answered Questions" />
          </Tabs>
        </AppBar>
        {value === 0 && <ul className='questionList'>
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <Question id={id}/>
            </li>
          ))}
        </ul>}
        {value === 1 && <ul className='questionList'>
          {this.props.answeredIds.map((id) => (
            <li key={id}>
              <Question id={id}/>
            </li>
          ))}
        </ul>}

      </div>


      )
  }

}

 function mapStateToProps ({ questions, authedUser }) {


  //returns an array of objects so object.keys will not work anymore:
  let unansweredQuestions = Object.values(questions).filter((question) =>
    !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser))

  let answeredQuestions = Object.values(questions).filter((question) =>
    question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))


  return {
    questionIds: Object.values(unansweredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id),
    answeredIds: Object.values(answeredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id)
  }
}

export default connect(mapStateToProps)(Dashboard)