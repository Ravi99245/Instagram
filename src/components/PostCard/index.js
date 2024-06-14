import {Component} from 'react'

import Cookies from 'js-cookie'

import {BsHeart} from 'react-icons/bs'
import {FcLike} from 'react-icons/fc'

import {
  ProfileImage,
  UserName,
  OvalContainer,
  ProfileContainer,
  ListItem,
  PostImage,
} from './styledComponent'

class PostCard extends Component {
  state = {likeStatus: ''}

  render() {
    const {likeStatus} = this.props
    const LikeIcon = likeStatus ? <FcLike /> : <BsHeart />
    const {card} = this.props
    console.log(card)
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
          <div></div>
        </div>
      </ListItem>
    )
  }
}

export default PostCard
