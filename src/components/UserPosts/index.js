import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import PostCard from '../PostCard/index'

import {LoaderContainer, PostContainer, CardsList} from './styledComponent'

const apiStatusText = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class UserPosts extends Component {
  state = {
    userPosts: [],
    apiStatus: apiStatusText.initial,
  }

  componentDidMount() {
    this.getUserPosts()
    this.setState({apiStatus: apiStatusText.inProgress})
  }

  getUserPosts = async () => {
    const url = 'https://apis.ccbp.in/insta-share/posts'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Baerer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const data = fetchedData.posts
      const postsList = data.map(eachItem => ({
        comments: eachItem.comments,
        createdAt: eachItem.created_at,
        likesCount: eachItem.likes_count,
        caption: eachItem.post_details.caption,
        imageUrl: eachItem.post_details.image_url,
        postId: eachItem.post_id,
        profilePic: eachItem.profile_pic,
        userId: eachItem.user_id,
        userName: eachItem.user_name,
      }))
      console.log(postsList)
      this.setState({userPosts: postsList, apiStatus: apiStatusText.success})
    } else {
      this.setState({apiStatus: apiStatusText.failure})
    }
  }

  renderUserPostsView = () => {
    const {userPosts} = this.state

    return (
      <CardsList>
        {userPosts.map(eachItem => (
          <PostCard key={eachItem.userId} card={eachItem} />
        ))}
      </CardsList>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#4e92f5" height="30" width="30" />
    </LoaderContainer>
  )

  renderAllUserPost = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusText.success:
        return this.renderUserPostsView()
      case apiStatusText.inProgress:
        return this.renderLoadingView()
      case apiStatusText.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return <PostContainer>{this.renderAllUserPost()}</PostContainer>
  }
}

export default UserPosts
