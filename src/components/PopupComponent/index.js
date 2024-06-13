import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoMdCloseCircle} from 'react-icons/io'

import InstaContext from '../../context/InstaContext'
import {
  LinkElement,
  CloseButton,
  OptionsContainer,
  PageName,
  InputElement,
  TotalContainer,
  SearchButton,
  SearchElement,
  SearchContainer,
  LogoutButton,
} from './styledComponent'

class PopupComponent extends Component {
  state = {
    searchInput: '',
  }

  ChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <InstaContext.Consumer>
        {value => {
          const {
            currentPage,
            changePage,
            showSearchBar,
            updateShowSearchBar,
            showOptions,
            updateShowOptions,
          } = value
          const updatePageToProfile = () => {
            changePage('profile')
          }
          const updatePageToHome = () => {
            changePage('home')
          }
          const updatePageToNone = () => {
            changePage('none')
          }
          const enhanceSearchBar = () => {
            updateShowSearchBar()
            changePage('none')
          }
          const enhanceShowOptions = () => {
            updateShowOptions()
          }

          return (
            <TotalContainer>
              {!showSearchBar && (
                <OptionsContainer>
                  <LinkElement to="/">
                    <PageName
                      active={currentPage === 'home'.toString()}
                      onClick={updatePageToHome}
                    >
                      Home
                    </PageName>
                  </LinkElement>
                  <PageName onClick={enhanceSearchBar}>Search</PageName>
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
                  <CloseButton
                    type="button"
                    aria-label="close"
                    onClick={enhanceShowOptions}
                  >
                    <IoMdCloseCircle />
                  </CloseButton>
                </OptionsContainer>
              )}
              {showSearchBar && (
                <SearchContainer>
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
                </SearchContainer>
              )}
            </TotalContainer>
          )
        }}
      </InstaContext.Consumer>
    )
  }
}

export default PopupComponent
