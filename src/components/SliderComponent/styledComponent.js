import styled from 'styled-components'

const Arrow = styled.div`
  display: block;
  color: #e5e5e5; /* Change this to your desired color */
  cursor: pointer;
  &:before {
    color: #334155; /* Change this to your desired color */
  }
`

export const CustomPrevArrow = props => {
  const {className, style, onClick} = props
  return <Arrow className={className} style={{...style}} onClick={onClick} />
}

export const CustomNextArrow = props => {
  const {className, style, onClick} = props
  return <Arrow className={className} style={{...style}} onClick={onClick} />
}
