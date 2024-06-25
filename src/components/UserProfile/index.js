import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header/index'
import InstaContext from '../../context/InstaContext'

import {
  UserContainer,
  LoaderContainer,
  ContentContainer,
  ProfileImage,
  DetailsContainer,
  NamesContainer,
  PostsContainer,
  UserName,
  Followers,
  SpanElement,
  UserId,
  UserBio,
} from './styledComponent'
import PopupComponent from '../PopupComponent/index'

const apiStatusText = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class UserProfile extends Component {
  state = {apiStatus: apiStatusText.initial, userDetails: {}}

  componentDidMount() {
    this.getUserDetails()
    this.setState({apiStatus: apiStatusText.inProgress})
  }

  getUserDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/insta-share/users/${id}`
    const options = {
      headers: {
        Authorization: `Beare ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const details = data.user_details
      const userDetails = {
        userName: details.user_name,
        userId: details.user_id,
        userBio: details.user_bio,
        followingCount: details.following_count,
        followersCount: details.followers_count,
        id: details.id,
        posts: details.posts,
        postsCount: details.posts_count,
        profilePic: details.profile_pic,
        stories: details.stories,
      }
      this.setState({userDetails, apiStatus: apiStatusText.success})
    } else {
      this.setState({apiStatus: apiStatusText.failure})
    }
  }

  renderSuccessView = () => {
    const {userDetails} = this.state
    const {
      userName,
      userBio,
      userId,
      profilePic,
      followersCount,
      followingCount,
      stories,
      posts,
      postsCount,
    } = userDetails

    return (
      <ContentContainer>
        <DetailsContainer>
          <ProfileImage src={profilePic} alt="userProfile" />
          <NamesContainer>
            <UserName>{userName}</UserName>
            <PostsContainer>
              <Followers>
                {postsCount} <SpanElement>posts</SpanElement>
              </Followers>
              <Followers>
                {followersCount} <SpanElement>followers</SpanElement>
              </Followers>
              <Followers>
                {followingCount} <SpanElement>following</SpanElement>
              </Followers>
            </PostsContainer>
            <UserId>{userId}</UserId>
            <UserBio>{userBio}</UserBio>
          </NamesContainer>
        </DetailsContainer>
      </ContentContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#4e92f5" height="30" width="30" />
    </LoaderContainer>
  )

  renderUserProfileDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusText.inProgress:
        return this.renderLoadingView()
      case apiStatusText.success:
        return this.renderSuccessView()
      case apiStatusText.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <InstaContext.Consumer>
        {value => {
          const {showOptions} = value
          return (
            <UserContainer>
              <Header />
              {showOptions && <PopupComponent />}
              <>{this.renderUserProfileDetails()}</>
            </UserContainer>
          )
        }}
      </InstaContext.Consumer>
    )
  }
}

export default UserProfile
