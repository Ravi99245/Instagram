import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginImage,
  InstaHeading,
  LoginFormContainer,
  FromElement,
  InputElements,
  InputElement,
  LabelElement,
  ErrorMsg,
  LoginButton,
} from './styledComponent'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = jwtToken => {
    console.log(jwtToken)
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    console.log(password)
    return (
      <>
        <LabelElement className="input-label" htmlFor="password">
          PASSWORD
        </LabelElement>
        <InputElement
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderInputField = () => {
    const {username} = this.state
    return (
      <>
        <LabelElement htmlFor="username">USERNAME</LabelElement>
        <InputElement
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const {jwtToken} = Cookies.get('jwt_token')
    console.log(jwtToken)
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginFormContainer>
        <div>
          <LoginImage
            src="https://res.cloudinary.com/da0gwokvk/image/upload/v1717048613/pgperlq6gunnksf44qay.png"
            alt="input-logo"
          />
        </div>
        <FromElement onSubmit={this.submitForm}>
          <img
            src="https://res.cloudinary.com/dxollddbj/image/upload/v1717655150/Standard_Collection_8_fskqkr.png"
            alt="instaLogo"
          />
          <InstaHeading>Insta Share</InstaHeading>

          <InputElements>{this.renderInputField()}</InputElements>
          <InputElements>{this.renderPasswordField()}</InputElements>
          {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          <LoginButton type="submit">Login</LoginButton>
        </FromElement>
      </LoginFormContainer>
    )
  }
}

export default LoginForm
