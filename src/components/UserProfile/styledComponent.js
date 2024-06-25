import styled from 'styled-components'

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
    width: 96px;
    height: 96px;
    top: 116px;
    left: 24px;
    gap: 0px;
    opacity: 0px;
  }
`

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: ##262626;
`
export const NamesContainer = styled.div`
  min-height: 1em;
  margin-left: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
  width: 45%;
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
`
export const Followers = styled.p`
  height: 24px;
  opacity: 0px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin: 0px;
  margin-bottom: 10px;
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
`

export const UserBio = styled.p`
  height: 1em;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  opacity: 0px;
  margin: 0px;
  margin-bottom: 10px;
`
