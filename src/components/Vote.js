import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Vote extends Component {

  render() {

    const { question } = this.props

    return (
<form>
        <div className="radio">
          <label>
            <input type="radio" value="option1" checked={true} />
            { question.optionOne.text }
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" />
            { question.optionTwo.text }
          </label>
        </div>

        <button
      className='btn'
      type='submit'
      >Submit</button>

      </form>

      )
  }
}

function mapStateToProps ({authedUser, users, questions}, props ) {

  const { id } = props.match.params
  const question = questions[id]

  return {
    id,
    question
  }

}

export default connect(mapStateToProps)(Vote)