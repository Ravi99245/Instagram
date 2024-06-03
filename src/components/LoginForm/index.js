import {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    passwordType: true,
    showSubmitError: false,
    errorMsg: '',
  }

  submitfrom = async event => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <div>
          <img
            src="https://res.cloudinary.com/da0gwokvk/image/upload/v1717048613/pgperlq6gunnksf44qay.png"
            alt="input-logo"
          />
        </div>
        <form onSubmit={this.submitfrom}>
          <div>{this.renderInputField()}</div>
          <div>{this.renderPasswordField()}</div>
        </form>
      </div>
    )
  }
}

export default LoginForm
