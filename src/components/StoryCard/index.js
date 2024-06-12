import InstaContext from '../../context/InstaContext'
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
    <InstaContext.Consumer>
      {value => {
        const {currentPage, changePage} = value
        return (
          <LinkElement to={`/users/${userId}`}>
            <StoryContainer>
              <StoryImage src={storyUrl} alt="user story" />
              <StoryName>{userName}</StoryName>
            </StoryContainer>
          </LinkElement>
        )
      }}
    </InstaContext.Consumer>
  )
}

export default StoryCard
