import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.backgroundAlt};
  color: ${props => props.theme.text};
`