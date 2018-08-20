import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { handleVote } from '../actions/questions'

class Vote extends Component {

  state = {
    toResults: false
  }

handleChange = (changeEvent) => {

  console.log('You selected ', changeEvent.target.value)

  this.setState({
    selectedOption: changeEvent.target.value
  })
}

  handleSubmit = (e) => {

    e.preventDefault()

    const { dispatch, id, authedUser } = this.props

    dispatch(handleVote(authedUser, id, this.state.selectedOption))

    this.setState(() => ({
      toResults: true
    }))

  }



  render() {

    const { toResults } = this.state

    const { question, id } = this.props

    /*redirect to results view if submitted*/
    if (toResults === true) {
      return <Redirect to={`/results/${id}`} />
    }

    return (
<form onSubmit={this.handleSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="radio"
              value="optionOne"
              onChange={this.handleChange} />
            { question.optionOne.text }
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="radio"
              value="optionTwo"
              onChange={this.handleChange} />
            { question.optionTwo.text }
          </label>
        </div>

        <button className='btn' type='submit'>Submit</button>

      </form>

      )
  }
}

function mapStateToProps ({authedUser, users, questions}, props ) {

  const { id } = props.match.params
  const question = questions[id]

  return {
    id,
    question,
    authedUser
  }

}


export default connect(mapStateToProps)(Vote)