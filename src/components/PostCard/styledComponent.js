import styled from 'styled-components'

import {BsHeart} from 'react-icons/bs'
import {FcLike} from 'react-icons/fc'
import {IoShareSocialSharp} from 'react-icons/io5'
import {BiMessageRounded} from 'react-icons/bi'

export const MessageIcon = styled(BiMessageRounded)`
  width: 24px;
  height: 24px;
  top: 688px;
  left: 104px;
  gap: 0px;
  opacity: 0px;
  color: #475569;
`

export const ShareIcon = styled(IoShareSocialSharp)`
  width: 24px;
  height: 24px;
  top: 688px;
  left: 64px;
  padding: 2px 1px 2.61px 1px;
  gap: 0px;
  opacity: 0px;
  color: #475569;
`

export const HeartIcon = styled(BsHeart)`
  width: 24px;
  height: 24px;
  top: 688px;
  left: 24px;
  padding: 1.92px 0.33px 2.32px 0.96px;
  gap: 0px;
  opacity: 0px;
  color: #475569;
`

export const FcLikeIcon = styled(FcLike)`
  width: 24px;
  height: 24px;
  top: 688px;
  left: 24px;
  padding: 1.92px 0.33px 2.32px 0.96px;
  gap: 0px;
  opacity: 0px;
`

export const ListItem = styled.li`
  width: 100%;
  height: 866px;
  top: 258px;
  left: 200px;
  gap: 0px;
  opacity: 0px;
  background-color: #ffffff;
  margin-bottom: 15px;
`

export const ProfileImage = styled.img`
  width: 28px;
  height: 28px;
  top: 16px;
  left: 26px;
  gap: 0px;
  opacity: 0px;
  border-radius: 25px;
  border: 1.7px solid;
  border-color: #ffffff;
`

export const UserName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  width: 104px;
  height: 18px;
  top: 21px;
  left: 72px;
  gap: 0px;
  opacity: 0px;
  margin-left: 15px;
  width: 100%;
`
export const OvalContainer = styled.div`
  width: 31px;
  height: 31px;
  display: inline-block;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    314.35deg,
    #e20337 6.03%,
    #c60188 40.88%,
    #7700c3 73.23%
  );
`
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  width: 100%;
  height: 60px;
  gap: 0px;
  border-radius: 4px 4px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  border: 1px solid #dbdbdb;
  padding-left: 25px;
`
export const PostImage = styled.img`
  width: 100%;
  height: 614px;
  top: 59px;
  gap: 0px;
  opacity: 0px;
`
export const CommentSection = styled.p`
  color: #262626;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
`
