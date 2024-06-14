import {Component} from 'react'

import Header from '../Header/index'
import SliderComponent from '../SliderComponent/index'
import PopupComponent from '../PopupComponent/index'
import UserPosts from '../UserPosts/index'
import InstaContext from '../../context/InstaContext'

import {
  MainContainer,
  SliderContainer,
  UserPostsContainer,
} from './styledComponent'

class Home extends Component {
  state = {}

  render() {
    return (
      <InstaContext.Consumer>
        {value => {
          const {showOptions} = value

          return (
            <MainContainer>
              <Header />
              {showOptions && <PopupComponent />}
              <SliderContainer>
                <SliderComponent />
              </SliderContainer>
              <UserPostsContainer>
                <UserPosts />
              </UserPostsContainer>
            </MainContainer>
          )
        }}
      </InstaContext.Consumer>
    )
  }
}

export default Home
