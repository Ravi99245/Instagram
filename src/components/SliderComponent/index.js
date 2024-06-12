import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Slider from 'react-slick'
import {Link} from 'react-router-dom'

import StoryCard from '../StoryCard/index'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
  CustomPrevArrow,
  CustomNextArrow,
  LoaderContainer,
} from './styledComponent'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
      },
    },
  ],
}

const apiStatusText = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SliderComponent extends Component {
  state = {
    storiesList: [],
    apiStatus: apiStatusText.initial,
  }

  componentDidMount() {
    this.getStoriesList()
    this.setState({apiStatus: apiStatusText.inProgress})
  }

  getStoriesList = async () => {
    const url = 'https://apis.ccbp.in/insta-share/stories'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const data = fetchedData.users_stories
      const list = data.map(eachItem => ({
        storyUrl: eachItem.story_url,
        userId: eachItem.user_id,
        userName: eachItem.user_name,
      }))
      this.setState({storiesList: list, apiStatus: apiStatusText.success})
    } else {
      this.setState({apiStatus: apiStatusText.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#4e92f5" height="30" width="30" />
    </LoaderContainer>
  )

  renderStoriesView = () => {
    const {storiesList} = this.state

    return (
      <Slider {...settings}>
        {storiesList.map(eachItem => (
          <StoryCard key={eachItem.userId} story={eachItem} />
        ))}
      </Slider>
    )
  }

  renderAllStories = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusText.success:
        return this.renderStoriesView()
      case apiStatusText.failure:
        return this.renderFailureView()
      case apiStatusText.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderAllStories()}</>
  }
}

export default SliderComponent
