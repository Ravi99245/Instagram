import {Component} from 'react'

import Header from '../Header/index'
import SliderComponent from '../SliderComponent/index'
import PopupComponent from '../PopupComponent/index'
import UserPosts from '../UserPosts/index'
import SearchResults from '../SearchResults'
import InstaContext from '../../context/InstaContext'

import {
  MainContainer,
  SliderContainer,
  UserPostsContainer,
  SearchContainer,
  Heading,
} from './styledComponent'

class Home extends Component {
  state = {}

  render() {
    return (
      <InstaContext.Consumer>
        {value => {
          const {showOptions, searchInput} = value
          console.log(searchInput)

          return (
            <MainContainer>
              <Header />
              {searchInput ? (
                <>
                  <SearchContainer>
                    <Heading>Search Results</Heading>
                    <SearchResults />
                  </SearchContainer>
                </>
              ) : (
                <>
                  {showOptions && <PopupComponent />}
                  <SliderContainer>
                    <SliderComponent />
                  </SliderContainer>
                  <UserPostsContainer>
                    <UserPosts />
                  </UserPostsContainer>
                </>
              )}
            </MainContainer>
          )
        }}
      </InstaContext.Consumer>
    )
  }
}

export default Home
