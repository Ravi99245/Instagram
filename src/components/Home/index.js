import {Component} from 'react'

import Header from '../Header/index'
import SliderComponent from '../SliderComponent/index'

import {MainContainer, SliderContainer} from './styledComponent'

class Home extends Component {
  state = {}

  render() {
    return (
      <MainContainer>
        <Header />
        <SliderContainer>
          <SliderComponent />
        </SliderContainer>
      </MainContainer>
    )
  }
}

export default Home
