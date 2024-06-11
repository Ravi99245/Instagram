import {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom'

import {FaSearch} from 'react-icons/fa'

import InstaContext from '../../context/InstaContext'

import {
  LinkElement,
  InstaLogo,
  HeaderContainer,
  LogoContainer,
  InputElement,
  SearchElement,
  SearchButton,
  SearchContainer,
  PageName,
  LogoutButton,
} from './styledCompnent'

class Header extends Component {
  state = {searchInput: ''}

  ChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    console.log(this.props)

    return (
      <InstaContext.Consumer>
        {value => {
          const {currentPage, changePage} = value
          const updatePageToProfile = () => {
            changePage('profile')
          }
          const updatePageToHome = () => {
            changePage('home')
          }
          const updatePageToNone = () => {
            changePage('none')
          }

          return (
            <HeaderContainer>
              <LinkElement to="/">
                <LogoContainer>
                  <InstaLogo
                    src="https://res.cloudinary.com/da0gwokvk/image/upload/v1718018945/Standard_Collection_8_1_lwmxiw.png"
                    alt="Cloud Logo"
                  />
                  <h1>Insta Share</h1>
                </LogoContainer>
              </LinkElement>
              <SearchContainer>
                <div>
                  <InputElement
                    type="search"
                    value={searchInput}
                    onChange={this.ChangeSearchInput}
                    placeholder="Search Caption"
                  />
                  <SearchButton
                    type="button"
                    aria-label="search"
                    onClick={updatePageToNone}
                  >
                    <SearchElement />
                  </SearchButton>
                </div>
                <LinkElement to="/">
                  <PageName
                    active={currentPage === 'home'.toString()}
                    onClick={updatePageToHome}
                  >
                    Home
                  </PageName>
                </LinkElement>
                <LinkElement to="/my-profile">
                  <PageName
                    active={currentPage === 'profile'.toString()}
                    onClick={updatePageToProfile}
                  >
                    Profile
                  </PageName>
                </LinkElement>
                <LogoutButton type="button" aria-label="logout">
                  Logout
                </LogoutButton>
              </SearchContainer>
            </HeaderContainer>
          )
        }}
      </InstaContext.Consumer>
    )
  }
}

export default Header
