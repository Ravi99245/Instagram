import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import InstaContext from './context/InstaContext'

import './App.css'

class App extends Component {
  state = {
    currentPage: 'home',
    showOptions: false,
  }

  changePage = pageName => {
    this.setState({currentPage: pageName})
  }

  updateShowOptions = () => {
    this.setState(prevState => ({
      showOptions: !prevState.showOptions,
    }))
  }

  render() {
    const {currentPage, showOptions} = this.state
    console.log(showOptions)

    return (
      <InstaContext.Provider
        value={{
          currentPage,
          changePage: this.changePage,
          showOptions,
          updateShowOptions: this.updateShowOptions,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </InstaContext.Provider>
    )
  }
}

export default App
