import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {

  render () {

    console.log('questionIds')
    console.log(this.props)

    return (
      <div>
      <h3>Your Questions</h3>
       <ul className='questionList'>
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <Question id={id}/>
            </li>
          ))}
        </ul>
      </div>


      )
  }

}

 function mapStateToProps ({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)