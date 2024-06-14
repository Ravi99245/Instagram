import styled from 'styled-components'

export const SliderContainer = styled.div`
  width: 72%;
  height: 130px;
  top: 258px;
  left: 200px;
  gap: 0px;
  opacity: 0px;
  margin-top: 50px;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 90px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`

export const UserPostsContainer = styled.div`
  width: 74%;
  min-height: 80vh;
`
export const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  top: 53177px;
  left: 20968px;
  gap: 0px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f7f8fa;

  @media screen and (max-width: 768px) {
    padding: 5px;
    background-color: #ffffff;
  }
`
