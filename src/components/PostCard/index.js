import {Component} from 'react'

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
  ButtonsContainer,
  LikeButton,
  Likes,
  Caption,
  SpanElement,
  BottomContainer,
  CreatedAt,
  LinkItem,
} from './styledComponent'

class PostCard extends Component {
  state = {numberOfLikes: '', likeStatus: false}

  componentDidMount() {
    const {card} = this.props
    const {likesCount} = card
    this.setState({numberOfLikes: likesCount})
  }

  UpdateLikeStatus = () => {
    this.setState(
      prevState => ({
        likeStatus: !prevState.likeStatus,
      }),
      this.updateLikesCount,
    )
  }

  updateLikesCount = () => {
    const {likeStatus} = this.state
    if (likeStatus) {
      this.setState(prevState => ({
        numberOfLikes: prevState.numberOfLikes + 1,
      }))
    } else {
      this.setState(prevState => ({
        numberOfLikes: prevState.numberOfLikes - 1,
      }))
    }
  }

  render() {
    const {numberOfLikes, likeStatus} = this.state
    const {card} = this.props
    const {
      profilePic,
      comments,
      createdAt,
      caption,
      imageUrl,
      userName,
      userId,
    } = card
    return (
      <ListItem>
        <LinkItem to={`/users/${userId}`}>
          <ProfileContainer>
            <OvalContainer>
              <ProfileImage src={profilePic} alt="post author profile" />
            </OvalContainer>
            <UserName>{userName}</UserName>
          </ProfileContainer>
        </LinkItem>

        <PostImage src={imageUrl} alt="post" />
        <BottomContainer>
          <ButtonsContainer>
            <LikeButton
              type="button"
              aria-label="like"
              onClick={this.UpdateLikeStatus}
            >
              {likeStatus ? <FcLikeIcon /> : <HeartIcon />}
            </LikeButton>
            <MessageIcon />
            <ShareIcon />
          </ButtonsContainer>
          <Likes>{numberOfLikes} likes</Likes>
          <Caption>{caption}</Caption>
          {comments.map(eachItem => (
            <CommentSection>
              {eachItem.user_name}
              <SpanElement>{eachItem.comment}</SpanElement>
            </CommentSection>
          ))}
          <CreatedAt>{createdAt}</CreatedAt>
        </BottomContainer>
      </ListItem>
    )
  }
}

export default PostCard
