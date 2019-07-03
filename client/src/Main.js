import React from 'react'
import Axios from 'axios'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './action_creators'

class Main extends React.Component {
  state = {shit: '', users: []}

  componentDidMount() {
    Axios.get('/users')
      .then(res => {
        console.log(res)
        this.setState({ shit: res.data.stuff })
      })
    Axios.get('/users/data')
      .then(res => {
        console.log(res)
        this.setState({users: res.data.users})
      })
  }

  render() {
    return (
      <div>
      {this.state}
      </div>
    )
  }
}

export default Main;
