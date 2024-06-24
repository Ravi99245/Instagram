import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const LinkElement = styled(Link)`
  text-decoration: none;
  color: #031022;
`
export const OptionsContainer = styled.div`
  height: 50px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
`
export const SearchContainer = styled.div`
  height: 50px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const PageName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  width: 41px;
  height: 18px;
  top: 23px;
  left: 1081px;
  gap: 0px;
  opacity: 0px;
  margin-left: 8px;
  color: ${props => (props.active ? ' #4e92f5' : ' #031022')};
`

export const InputElement = styled.input`
  border: 1px solid #dbdbdb;
  border-radius: 0px;
  border-right-width: 0px;
  width: 214px;
  height: 28px;
  top: 18px;
  left: 781px;
  gap: 0px;
  border-radius: 3px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
`
export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const SearchElement = styled(FaSearch)`
  width: 10px;
  height: 10px;
  top: 27px;
  left: 972px;
  gap: 0px;
  opacity: 0px;
`
export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  width: 34px;
  height: 28px;
  top: 19px;
  left: 960px;
  gap: 0px;
  border-radius: 0px 2px 2px 0px;
  opacity: 0px;
  margin-right: 10px;
`
export const LogoutButton = styled.button`
  width: Hug (86px) px;
  height: Hug (32px) px;
  top: 80px;
  left: 197px;
  gap: 0px;
  opacity: 0px;
  padding: 7px;
  border: none;
  background-color: #4094ef;
  color: #ffffff;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  font-size: 12px;
`
