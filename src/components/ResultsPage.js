import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class ResultsPage extends Component {

  render () {
    const { id, question } = this.props
    console.log(question)

    return (
      <div>
      <Poll id={id}/>
      </div>
      )
  }


}

function mapStateToProps ({authedUser, users, questions}, props ) {
  const { id } = props.match.params
  const question = questions[id]
  const yourVote = users[authedUser].answers[id]

   return {
    id,
    question

  }
}


export default connect(mapStateToProps)(ResultsPage)