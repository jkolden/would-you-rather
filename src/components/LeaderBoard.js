import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class LeaderBoard extends Component {

  render () {
    console.log(this.props)

    return (
      <div>
      Leader Board

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