import styled from 'styled-components'

export const Root = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.active ? 1 : 0};
  pointer-events: ${props => props.active ? 'all' : 'none'};
  transition: 0.5s;
`

export const Content = styled.div`
  width: 25vw;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  transform: ${props => props.active ? 'scale(1)' : 'scale(0.5)'};
  transition: 0.4s all;
`