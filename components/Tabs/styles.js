import styled from 'styled-components'
import { H3, Text } from '../../styles/Theme/commonStyles.js'

export const Tab = styled.div`
  overflow: hidden;
  border: 1px solid #6cb2f2;
  background-color: white;
`

export const Button = styled.button`
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;

  &:hover {
    background-color: #1f87e7;
  }

  &.active {
    color: #1f87e7;
    text-decoration: underline;
  }
`

export const TabContent = styled.div`
  padding: 6px 12px;
  border: 1px solid #6cb2f2;
  border-top: none;
  min-height: 500px;
`

export const Title = styled(H3)`
  margin: 20px 0;
`

export const Content = styled.div``

export const AddSolutionsFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddSolutionsFieldsTitle = styled(H3)`
  margin: 30px 0 10px 0;
`

export const AddSolutionsFieldsTextarea = styled.textarea`
  width: 100%;
  display: flex;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  padding: 5px 10px;
  min-height: 100px;
  resize: none;
`


//DisplaySolutions styles

export const DisplaySolutionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const DisplaySolution = styled.div``

export const DisplaySolutionTitle = styled(Text)``