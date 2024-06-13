import {
  StoryImage,
  StoryName,
  StoryContainer,
  LinkElement,
} from './styledComponent'

const StoryCard = props => {
  const {story} = props
  const {storyUrl, userId, userName} = story

  return (
    <LinkElement to={`/users/${userId}`}>
      <StoryContainer>
        <StoryImage src={storyUrl} alt="user story" />
        <StoryName>{userName}</StoryName>
      </StoryContainer>
    </LinkElement>
  )
}

export default StoryCard
