import React, { Component, PropTypes } from 'react'
import { InputConnected } from 'components/Input/Input'
import Button from 'components/Button'
import { Link } from 'react-router'

export default class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    authenticate: PropTypes.func.isRequired,
  }
  render() {
    const { auth, login, authenticate } = this.props
    return (
      <div>
        <InputConnected
          placeholder="Email"
          type="text"
          model="auth.loginForm.email"
          value={ auth.loginForm.email }
          display="standard"
        />
        <InputConnected
          placeholder="Password"
          type="password"
          value={ auth.loginForm.password }
          model="auth.loginForm.password"
          display="standard"
        />
      </div>
    )
  }
}
