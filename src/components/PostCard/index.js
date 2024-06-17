import {Component} from 'react'

import Cookies from 'js-cookie'

import {
  ProfileImage,
  UserName,
  OvalContainer,
  ProfileContainer,
  ListItem,
  PostImage,
  MessageIcon,
  ShareIcon,
  HeartIcon,
  FcLikeIcon,
  CommentSection,
} from './styledComponent'

class PostCard extends Component {
  state = {numberOfLikes: '', likeStatus: false}

  componentDidMount() {
    const {card} = this.props
    const {likesCount} = card
    this.setState({numberOfLikes: likesCount})
  }

  render() {
    const {numberOfLikes} = this.state
    const {likeStatus} = this.props
    const {card} = this.props
    const {
      profilePic,
      comments,
      createdAt,
      likesCount,
      caption,
      imageUrl,
      postId,
      userId,
      userName,
    } = card
    return (
      <ListItem>
        <ProfileContainer>
          <OvalContainer>
            <ProfileImage src={profilePic} alt="post author profile" />
          </OvalContainer>
          <UserName>{userName}</UserName>
        </ProfileContainer>
        <PostImage src={imageUrl} alt="post" />
        <div>
          <div>
            <button type="button" aria-label="like">
              {likeStatus ? <FcLikeIcon /> : <HeartIcon />}
            </button>
            <ShareIcon />
            <MessageIcon />
          </div>
          <p>{numberOfLikes}</p>
          <p>{caption}</p>
          {comments.map(eachItem => (
            <CommentSection>
              <p>{eachItem.user_name}</p>
              {eachItem.comment}
            </CommentSection>
          ))}
        </div>
      </ListItem>
    )
  }
}

export default PostCard
