import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkElement = styled(Link)`
  text-decoration: none;
`

export const StoryImage = styled.img`
  width: 70px;
  height: 70px;
  top: 112px;
  left: 274px;
  gap: 0px;
  border-radius: 35px;
  opacity: 0px;
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    top: 80px;
    left: 48px;
    gap: 0px;
    border-radius: 25px;
    opacity: 0px;
  }
`
export const StoryName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #010d1f;
  @media screen and (max-width: 768px) {
    font-family: 'Roboto';
    font-size: 6px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }
`
export const StoryContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
