import {Component} from 'react'

import Header from '../Header/index'
import SliderComponent from '../SliderComponent/index'
import PopupComponent from '../PopupComponent/index'
import InstaContext from '../../context/InstaContext'

import {MainContainer, SliderContainer} from './styledComponent'

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
            </MainContainer>
          )
        }}
      </InstaContext.Consumer>
    )
  }
}

export default Home
