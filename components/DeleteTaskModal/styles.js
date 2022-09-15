import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  padding-bottom: 15px;
  margin-left: auto;
  cursor: pointer;
`

export const Content = styled.div`
  text-align: center;
  padding-bottom: 30px;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`

export const YesButton = styled.div`
  background: green;
  border: 1px solid green;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 10px;
`

export const NoButton = styled.div`
  background: red;
  border: 1px solid red;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 10px;
`