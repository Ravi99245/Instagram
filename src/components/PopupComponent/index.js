import {Component} from 'react'
import {withRouter} from 'react-router-dom'
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
            changePage,
            showSearchBar,
            updateShowSearchBar,
            updateShowOptions,
          } = value

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
          const {history} = this.props

          return (
            <TotalContainer>
              {!showSearchBar && (
                <OptionsContainer>
                  <LinkElement to="/">
                    <PageName active={history.location.pathname === '/'}>
                      Home
                    </PageName>
                  </LinkElement>
                  <PageName onClick={enhanceSearchBar}>Search</PageName>
                  <LinkElement to="/my-profile">
                    <PageName
                      active={history.location.pathname === '/my-profile'}
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

export default withRouter(PopupComponent)
