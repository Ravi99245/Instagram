import {Component} from 'react'
import {withRouter} from 'react-router-dom'

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
  HamburgerButton,
  HamburgerIcon,
  AppName,
} from './styledCompnent'

class Header extends Component {
  state = {searchInput: ''}

  ChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  goToMyProfile = () => {
    const {history} = this.props
    history.replace('/my-profile')
  }

  goToSearchPage = () => {
    const {history} = this.props
    const {searchInput} = this.state
    if (searchInput) {
      history.push('/search-results')
    }
  }

  render() {
    const {searchInput} = this.state

    return (
      <InstaContext.Consumer>
        {value => {
          const {changePage, updateShowOptions, updateSearchInput} = value

          const updatePageToNone = () => {
            changePage('none')
            updateSearchInput(searchInput)
          }
          const showSearchInput = () => {
            updateShowOptions()
          }
          const {history} = this.props
          return (
            <HeaderContainer>
              <LinkElement to="/">
                <LogoContainer>
                  <InstaLogo
                    src="https://res.cloudinary.com/da0gwokvk/image/upload/v1718018945/Standard_Collection_8_1_lwmxiw.png"
                    alt="Cloud Logo"
                  />
                  <AppName>Insta Share</AppName>
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
                  <PageName active={history.location.pathname === '/'}>
                    Home
                  </PageName>
                </LinkElement>
                <LinkElement to="/my-profile">
                  <PageName
                    active={history.location.pathname === '/my-profile'}
                    onClick={this.goToMyProfile}
                  >
                    Profile
                  </PageName>
                </LinkElement>
                <LogoutButton type="button" aria-label="logout">
                  Logout
                </LogoutButton>
              </SearchContainer>
              <HamburgerButton
                type="button"
                aria-label="menu"
                onClick={showSearchInput}
              >
                <HamburgerIcon />
              </HamburgerButton>
            </HeaderContainer>
          )
        }}
      </InstaContext.Consumer>
    )
  }
}

export default withRouter(Header)
