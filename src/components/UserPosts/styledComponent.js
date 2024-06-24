import styled from 'styled-components'

export const LoaderContainer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const CardsList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
    border: 0.5px 0px 0px 0px;
    border: 0.5px solid #c6c6c8;
  }
`
