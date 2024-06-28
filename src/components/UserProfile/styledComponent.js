import styled from 'styled-components'

import {MdGridOn} from 'react-icons/md'
import {FaCamera} from 'react-icons/fa'

export const UserContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fafafa;
`

export const LoaderContainer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`
export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  top: 97px;
  left: 200px;
  gap: 0px;
  opacity: 0px;
  background: #c4c4c4;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const SmallProfileImage = styled.img`
  width: 96px;
  height: 96px;
  top: 116px;
  left: 24px;
  gap: 0px;
  opacity: 0px;
  border-radius: 50%;
  margin-right: 25px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DetailsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: ##262626;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const NamesContainer = styled.div`
  min-height: 1em;
  margin-left: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-top: 15px;
  }
`
export const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
  width: 60%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SmallPostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
  width: 45%;
  @media screen and (min-width: 768px) {
    display: non;
  }
`

export const SmallProfileAndFollowersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const UserName = styled.p`
  height: 32px;
  top: 99px;
  left: 444px;
  gap: 0px;
  opacity: 0px;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  color: #262626;
  line-height: 1em;
  margin: 0px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const SmallUserName = styled.p`
  height: 20px;
  top: 80px;
  left: 24px;
  gap: 0px;
  opacity: 0px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Followers = styled.p`
  width: auto;
  height: 24px;
  opacity: 0px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin: 0px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-right: 15px;
  }
`

export const SpanElement = styled.span`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`
export const UserId = styled.p`
  height: 24px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  opacity: 0px;
  margin: 0px;
  margin-bottom: 10px;
  color: #06b7f4;
  @media screen and (max-width: 768px) {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  }
`

export const UserBio = styled.p`
  height: 1em;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  opacity: 0px;
  margin: 0px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-family: 'Roboto';
    height: auto;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    margin-bottom: 0px;
  }
`

export const StoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`

export const StoriesImage = styled.img`
  width: 78px;
  height: 78px;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 56px;
    height: 56px;
    gap: 0px;
    opacity: 0px;
  }
`

export const ImageStoryContainer = styled.div`
  width: 86px;
  height: 86px;
  gap: 0px;
  border: 1px;
  border-radius: 50%;
  opacity: 0px;
  border: 2px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    border: 1.5px solid #dbdbdb;
    width: 64px;
    height: 64px;
    gap: 0px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
    margin-top: 20px;
  }
`

export const HorizontalLine = styled.hr`
  width: 100%;
  height: 0px;
  top: 459px;
  left: 200px;
  gap: 0px;
  border: 0.5px 0px 0px 0px;
  opacity: 0px;
  border: 0.5px solid #c6c6c8;
  margin-top: 25px;
  margin-bottom: 0px;
`

export const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0px;
`

export const UserPostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 0px;
`

export const PostsGrid = styled.p`
  width: 62px;
  height: 32px;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  opacity: 0px;
`

export const GridIcon = styled(MdGridOn)`
  width: 24px;
  height: 24px;
  padding: 3px 4.13px 4.13px 3px;
  gap: 0px;
  opacity: 0px;
  margin-right: 10px;
`
export const PostsImageContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    padding: 3px;
  }
`
export const PostImage = styled.img`
  width: 100%;
  height: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

export const NoPostsContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Camera = styled(FaCamera)`
  width: 48px;
  height: 45px;
  opacity: 0px;
  @media screen and (max-width: 768px) {
    width: 29.02px;
    height: 26.79px;
    gap: 0px;
    opacity: 0px;
  }
`

export const CameraContainer = styled.div`
  width: 86px;
  height: 86px;
  top: 522px;
  left: 677px;
  gap: 0px;
  opacity: 0px;
  border: 2px solid #262626;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 48px;
    height: 48px;
    gap: 0px;
    opacity: 0px;
    border: 1.12px solid #262626;
  }
`

export const NoPostsComment = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 300;
  line-height: 48px;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
  }
`
