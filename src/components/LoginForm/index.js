import {Component} from 'react'

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

  submitForm = async event => {
    event.preventDefault()
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
          <LoginButton type="button">Login</LoginButton>
        </FromElement>
      </LoginFormContainer>
    )
  }
}

export default LoginForm
