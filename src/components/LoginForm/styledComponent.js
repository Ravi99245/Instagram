import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: 'Roboto';
`

export const LoginImage = styled.img`
  width: 582px;
  height: 373px;
  top: 326px;
  left: 160px;
  gap: 0px;
  opacity: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const InstaHeading = styled.h1`
  font-size: 25px;
  margin-bottom: 50px;
`
export const FromElement = styled.form`
  width: 456px;
  height: 458px;
  gap: 0px;
  border-radius: 10px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 768px) {
    padding: 20px;
    box-shadow: none;
    justify-content: center;
    align-items: center;
  }
`
export const InstaLogo = styled.img`
  width: 82px;
  height: 42px;
`
export const InputElements = styled.div`
  width: 360px;
  height: 64px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 769px) {
    width: 312px;
    height: 64px;
    top: 360px;
    left: 24px;
    gap: 0px;
    opacity: 0px;
  }
`
export const InputElement = styled.input`
  border: none;
  margin-top: 6px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #11113d;
  background-color: #f0f0f4;
  border-radius: 4px;
  padding: 4px;
`
export const LabelElement = styled.label`
  font-size: 16px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  margin-top: 0px;
  align-self: flex-start;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: left;
  margin-left: 40px;
  @media screen and (max-width: 769px) {
    margin-left: 15px;
  }
`

export const LoginButton = styled.button`
  width: 360px;
  height: 35px;
  opacity: 0px;
  border: none;
  border-radius: 6px;
  background-color: #4e92f5;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 769px) {
    width: 312px;
    height: 40px;
    top: 448px;
    left: 24px;
    gap: 0px;
    opacity: 0px;
  }
`
