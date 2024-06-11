import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {FaSearch} from 'react-icons/fa'

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

export const LinkElement = styled(Link)`
  text-decoration: none;
  color: #031022;
`
export const InstaLogo = styled.img`
  width: 59px;
  height: 30px;
  top: 17px;
  left: 200px;
  gap: 0px;
  opacity: 0px;
  margin-right: 8px;
`
export const HeaderContainer = styled.nav`
  height: 64px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: 'Roboto';
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const PageName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
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
export const LogoutButton = styled.button`
  color: #ffffff;
  width: 75px;
  height: 28px;
  top: 16px;
  left: 1154px;
  gap: 0px;
  opacity: 0px;
  background-color: #4e92f5;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  margin-left: 10px;
`