import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import UserProfile from './components/UserProfile/index'
import InstaContext from './context/InstaContext'

import './App.css'

class App extends Component {
  state = {
    currentPage: 'home',
    showOptions: false,
    showSearchBar: false,
  }

  changePage = pageName => {
    this.setState({currentPage: pageName})
  }

  updateShowOptions = () => {
    this.setState(prevState => ({
      showOptions: !prevState.showOptions,
      showSearchBar: false,
    }))
  }

  updateShowSearchBar = () => {
    this.setState(prevState => ({
      showSearchBar: !prevState.showSearchBar,
    }))
  }

  render() {
    const {currentPage, showOptions, showSearchBar} = this.state

    return (
      <InstaContext.Provider
        value={{
          currentPage,
          changePage: this.changePage,
          showOptions,
          updateShowOptions: this.updateShowOptions,
          showSearchBar,
          updateShowSearchBar: this.updateShowSearchBar,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/users/:id" component={UserProfile} />
          <Route exact path="/my-profile" component={UserProfile} />
        </Switch>
      </InstaContext.Provider>
    )
  }
}

export default App
